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
  test.beforeEach(async () => {
    await cleanupNavigationRecordByName({
      name: FIRST_NAVIGATION_NAME,
    });

    await cleanupNavigationRecordByName({
      name: SECOND_NAVIGATION_NAME,
    });
  });

  test.afterEach(async () => {
    await cleanupNavigationRecordByName({
      name: FIRST_NAVIGATION_NAME,
    });

    await cleanupNavigationRecordByName({
      name: SECOND_NAVIGATION_NAME,
    });
  });

  test(
    `GIVEN an empty navigation collection
     WHEN create and publish navigation records in CMS UI
     SHOULD see navigation item on frontend UI
    `,
    async ({
      goto,
      page,
    }: {
      goto: CustomTestFixtures['goto'];
      page: Page;
    }) => {
      await page.goto(process.env.CMS_URL as string);

      await authorizationInStrapi({
        page,
      });

      await createAndPublishNavigation({
        page,
      });

      // Check navigation on UI
      await goto();

      await page.getByText(FIRST_NAVIGATION_NAME)
        .isVisible();

      await page.getByText(FIRST_NAVIGATION_NAME)
        .hover();

      await page.getByText(SECOND_NAVIGATION_NAME)
        .isVisible();
    },
  );
});

async function authorizationInStrapi({
  page,
}: {
  page: Page;
}) {
  await page.locator(`input[name=email]`)
    .fill(process.env.CMS_EMAIL as string);

  await page.locator(`input[name=password]`)
    .fill(process.env.CMS_PASSWORD as string);

  await page.getByText(`Login`)
    .click();
}

async function createAndPublishNavigation({
  page,
}: {
  page: Page;
}) {
  await page.getByText(`Content Manager`)
    .click();

  // We are waiting for the tutorial window to appear in order to close it
  await page.waitForTimeout(1000);

  await skipTutorial({
    page,
  });

  await page.getByRole(`link`, {
    name: `Navigation`,
    exact: true,
  })
    .click();

  await page.getByRole(`link`, {
    name: `Create new entry`,
  })
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

async function skipTutorial({
  page,
}: {
  page: Page;
}) {
  const skipButton = await page.getByRole(`button`, {
    name: `Skip`,
  });

  if (await skipButton.isVisible()) {
    await skipButton.click();
  }
}

async function cleanupNavigationRecordByName({
  name,
}: {
  name: string;
}) {
  try {
    const navigationList = await cmsFetch<NavigationListResponse>(`${ENDPOINT}?populate=*`);

    const navigation = navigationList?.data?.find((navigationItem: Navigation) => navigationItem.name === name);

    if (navigation) {
      const response = await cmsFetch(`${ENDPOINT}/${navigation.documentId}`, {
        method: `DELETE`,
      });

      await expect(response.status, `Navigation should be deleted with status 204`)
        .toEqual(204);
    }
  } catch (error: any) {
    throw new Error(`Failed to delete test navigation: ${error.message}`);
  }
}
