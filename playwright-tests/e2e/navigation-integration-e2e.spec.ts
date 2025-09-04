import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "../custom-test";
import { cmsFetch } from "../../services/cms/api/http-client";
import { Navigation, NavigationListResponse } from "../../common/types";
import { E2E_UI_NAME_PREFIX } from "../constants/e2e-ui-name-prefix";

const FIRST_NAVIGATION_NAME = `${E2E_UI_NAME_PREFIX} First navigation`;
const SECOND_NAVIGATION_NAME = `${E2E_UI_NAME_PREFIX} Second navigation`;

const ENDPOINT = `/navigations`;

test.describe(`Navigation integration e2e test`, () => {
  test.describe(`Main scenario for adding navigation`, () => {
    test.beforeEach(async () => {
      await cleanupNavigationRecordByNameApi({
        name: FIRST_NAVIGATION_NAME,
      });

      await cleanupNavigationRecordByNameApi({
        name: SECOND_NAVIGATION_NAME,
      });
    });

    test.afterEach(async () => {
      await cleanupNavigationRecordByNameApi({
        name: FIRST_NAVIGATION_NAME,
      });

      await cleanupNavigationRecordByNameApi({
        name: SECOND_NAVIGATION_NAME,
      });
    });

    test(
      `GIVEN an empty navigation menu
       WHEN creating and publishing navigation records in CMS UI
       SHOULD see navigation items on frontend UI 
    `,
      async ({
        goto,
        authorizationInCms,
        skipCmsTutorial,
        page,
      }: {
        goto: CustomTestFixtures['goto'];
        authorizationInCms: CustomTestFixtures['authorizationInCms'];
        skipCmsTutorial: CustomTestFixtures['skipCmsTutorial'];
        page: Page;
      }) => {
        await page.goto(process.env.CMS_URL as string);

        await authorizationInCms();

        await createAndPublishNavigationCmsUi({
          page,
          skipCmsTutorial,
        });

        // Check navigation on UI
        await goto();

        await expect(page.getByText(FIRST_NAVIGATION_NAME))
          .toBeVisible();

        await page.getByText(FIRST_NAVIGATION_NAME)
          .hover();

        await expect(page.getByText(SECOND_NAVIGATION_NAME))
          .toBeVisible();
      },
    );

    async function createAndPublishNavigationCmsUi({
      page,
      skipCmsTutorial,
    }: {
      page: Page;
      skipCmsTutorial: CustomTestFixtures['skipCmsTutorial'];
    }) {
      await page.getByText(`Content Manager`)
        .click();

      // We are waiting for the tutorial window to appear in order to close it
      await page.waitForTimeout(1500);

      await skipCmsTutorial();

      await page.getByRole(`link`, {
        name: `Navigation`,
        exact: true,
      })
        .click();

      await page.getByRole(`link`, {
        name: `Create new entry`,
      })
        .last()
        .click();

      await page.locator(`input[name=name]`)
        .fill(FIRST_NAVIGATION_NAME);

      await page.locator(`input[name=navItems]`)
        .click();

      await page.getByText(`Create a relation`, {
        exact: true,
      })
        .click();

      await page.locator(`input[name=name]`)
        .last()
        .fill(SECOND_NAVIGATION_NAME);

      await page.getByRole(`button`, {
        name: `Publish`,
      })
        .last()
        .click();

      await page.getByRole(`button`, {
        name: `Close modal`,
      })
        .click();

      await page.locator(`input[name=navItems]`)
        .click();

      await page.getByText(SECOND_NAVIGATION_NAME)
        .click();

      await page.getByRole(`checkbox`, {
        name: `isFirstLevelNavItem`,
      })
        .check();

      await page.getByRole(`button`, {
        name: `Publish`,
      })
        .click();
    }
  });

  test.describe(`Creating navigation in different languages`, () => {
    test.beforeEach(async () => {
      await cleanupNavigationRecordByNameApi({
        name: FIRST_NAVIGATION_NAME,
      });

      await cleanupNavigationRecordByNameApi({
        name: SECOND_NAVIGATION_NAME,
        locale: `ru`,
      });

      await createNavigationApi({
        name: FIRST_NAVIGATION_NAME,
      });

      await createNavigationApi({
        name: SECOND_NAVIGATION_NAME,
        locale: `ru`,
      });
    });

    test.afterEach(async () => {
      await cleanupNavigationRecordByNameApi({
        name: FIRST_NAVIGATION_NAME,
      });

      await cleanupNavigationRecordByNameApi({
        name: SECOND_NAVIGATION_NAME,
        locale: `ru`,
      });
    });

    test(
      `GIVEN an empty navigation menu
       WHEN creating navigation records in different languages via API
       AND checking the navigation items in different languages
       THEN the user should see navigation items on the frontend UI with correct translations
      `,
      async ({
        goto,
        page,
      }: {
        goto: CustomTestFixtures['goto'];
        page: Page;
      }) => {
        await goto();

        await expect(page.getByText(FIRST_NAVIGATION_NAME))
          .toBeVisible();

        await expect(page.getByText(SECOND_NAVIGATION_NAME))
          .toBeHidden();

        await page.getByTestId(`lang-switch`)
          .hover();

        await page.getByText(`RU`)
          .click();

        await page.waitForLoadState(`networkidle`);

        await expect(page.getByText(SECOND_NAVIGATION_NAME))
          .toBeVisible();

        await expect(page.getByText(FIRST_NAVIGATION_NAME))
          .toBeHidden();
      },
    );

    async function createNavigationApi({
      name,
      locale = `en`,
    }: {
      name: string;
      locale?: 'ru' | 'en';
    }) {
      try {
        const response = await cmsFetch(`${ENDPOINT}?locale=${locale}`, {
          method: `post`,
          headers: {
            'Content-Type': `application/json`,
          },
          body: JSON.stringify({
            data: {
              name,
              link: `/`,
              isFirstLevelNavItem: true,
            },
          }),
        });

        await expect(response.status, `Navigation should be created with status 201`)
          .toEqual(201);
      } catch (error: any) {
        throw new Error(`Failed to create test navigation: ${error.message}`);
      }
    }
  });
});

async function cleanupNavigationRecordByNameApi({
  name,
  locale = `en`,
}: {
  name: string;
  locale?: 'ru' | 'en';
}) {
  try {
    const navigationList = await cmsFetch<NavigationListResponse>(`${ENDPOINT}?populate=*&locale=${locale}`);

    const navigation = navigationList?.data?.find((navigationItem: Navigation) => navigationItem.name === name);

    if (navigation) {
      const response = await cmsFetch(`${ENDPOINT}/${navigation.documentId}?locale=${locale}`, {
        method: `DELETE`,
      });

      await expect(response.status, `Navigation should be deleted with status 204`)
        .toEqual(204);
    }
  } catch (error: any) {
    throw new Error(`Failed to delete test navigation: ${error.message}`);
  }
}
