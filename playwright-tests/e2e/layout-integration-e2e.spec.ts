import { Breakpoint } from "../../common/enums";
import { cmsFetch } from "../../services/cms/api/http-client";
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "../custom-test";

const EMAIL_ADDRESS = `test@tourmalinecore.com`;
const EMAIL_CAPTION = `If you have any questions`;
const BUTTON_LABEL_EN = `Discuss the project`;
const NAVIGATION_LIST_CAPTION_EN = `Navigation`;
const BUTTON_LABEL_RU = `Обсудить проект`;
const NAVIGATION_LIST_CAPTION_RU = `Навигация`;

const ENDPOINT = `/layout`;

test.describe(`Layout integration e2e test`, () => {
  test.describe(`Main scenario for filling layout`, () => {
    test.beforeEach(async () => {
      await cleanupLayoutApi();
    });

    test.afterEach(async () => {
      await cleanupLayoutApi();
    });

    test(
      `GIVEN an empty layout
       WHEN filling and publishing layout in CMS UI
       SHOULD see filled layout on frontend UI 
    `,
      async ({
        goto,
        authorizationInCms,
        skipCmsTutorial,
        setViewportSize,
        page,
      }: {
        goto: CustomTestFixtures['goto'];
        authorizationInCms: CustomTestFixtures['authorizationInCms'];
        skipCmsTutorial: CustomTestFixtures['skipCmsTutorial'];
        setViewportSize: CustomTestFixtures['setViewportSize'];
        page: Page;
      }) => {
        await page.goto(process.env.CMS_URL as string);

        await authorizationInCms();

        await fillAndPublishNavigationCmsUi({
          page,
          skipCmsTutorial,
        });

        await checkLayoutOnUi({
          page,
          setViewportSize,
          goto,
        });
      },
    );

    async function fillAndPublishNavigationCmsUi({
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
        name: `Layout`,
      })
        .click();

      await page.locator(`input[name=emailAddress]`)
        .fill(EMAIL_ADDRESS);

      await page.locator(`input[name='header.buttonLabel']`)
        .fill(BUTTON_LABEL_EN);

      await page.locator(`input[name='header.emailCaption']`)
        .fill(EMAIL_CAPTION);

      await page.getByText(`No entry yet. Click to add one.`)
        .click();

      await page.locator(`input[name='footer.navigationLists.0.caption']`)
        .fill(NAVIGATION_LIST_CAPTION_EN);

      await page.locator(`input[name='footer.emailCaption']`)
        .fill(EMAIL_CAPTION);

      await page.getByRole(`button`, {
        name: `Publish`,
      })
        .click();
    }

    async function checkLayoutOnUi({
      page,
      goto,
      setViewportSize,
    }: {
      page: Page;
      goto: CustomTestFixtures['goto'];
      setViewportSize: CustomTestFixtures['setViewportSize'];
    }) {
      await goto();

      await expect(page.getByText(EMAIL_CAPTION))
        .toBeVisible();

      await expect(page.getByText(EMAIL_ADDRESS))
        .toBeVisible();

      await expect(page.getByText(BUTTON_LABEL_EN))
        .toBeVisible();

      await expect(page.getByText(NAVIGATION_LIST_CAPTION_EN))
        .toBeVisible();

      // Check layout content in mobile menu
      await setViewportSize({
        width: Breakpoint.TABLET,
      });

      await page.getByTestId(`header-redesign-burger`)
        .click();

      const mobileMenu = await page.getByTestId(`mobile-menu-redesign`);

      await expect(mobileMenu)
        .toContainText(EMAIL_CAPTION);

      await expect(mobileMenu)
        .toContainText(EMAIL_ADDRESS);

      await expect(mobileMenu)
        .toContainText(BUTTON_LABEL_EN);
    }
  });

  test.describe(`Creating layout in different languages`, () => {
    test.beforeEach(async () => {
      await cleanupLayoutApi();

      await cleanupLayoutApi({
        locale: `ru`,
      });

      await updateLayoutApi({
        emailAddress: EMAIL_ADDRESS,
        buttonLabel: BUTTON_LABEL_EN,
        navigationListCaption: NAVIGATION_LIST_CAPTION_EN,
      });

      await updateLayoutApi({
        emailAddress: EMAIL_ADDRESS,
        buttonLabel: BUTTON_LABEL_RU,
        navigationListCaption: NAVIGATION_LIST_CAPTION_RU,
        locale: `ru`,
      });
    });

    test.afterEach(async () => {
      await cleanupLayoutApi();

      await cleanupLayoutApi({
        locale: `ru`,
      });
    });

    test(
      `
      GIVEN an empty layout
      WHEN filling layout content in different languages via API
      AND checking the layout content in different languages
      THEN the user should see layout content on the frontend UI with correct translations
    `,
      async ({
        goto,
        page,
      }: {
        goto: CustomTestFixtures['goto'];
        page: Page;
      }) => {
        await goto();

        await expect(page.getByText(BUTTON_LABEL_EN))
          .toBeVisible();

        await expect(page.getByText(NAVIGATION_LIST_CAPTION_EN))
          .toBeVisible();

        await page.getByTestId(`lang-switch`)
          .hover();

        await page.getByText(`RU`)
          .click();

        await page.waitForLoadState(`networkidle`);

        await expect(page.getByText(BUTTON_LABEL_RU))
          .toBeVisible();

        await expect(page.getByText(NAVIGATION_LIST_CAPTION_RU))
          .toBeVisible();
      },
    );
  });

  async function updateLayoutApi({
    emailAddress,
    buttonLabel,
    navigationListCaption,
    locale = `en`,
  }: {
    emailAddress: string;
    buttonLabel: string;
    navigationListCaption: string;
    locale?: 'ru' | 'en';
  }) {
    try {
      const response = await cmsFetch(`${ENDPOINT}?locale=${locale}`, {
        method: `PUT`,
        body: JSON.stringify({
          data: {
            emailAddress,
            header: {
              buttonLabel,
            },
            footer: {
              navigationLists: [
                {
                  caption: navigationListCaption,
                },
              ],
            },
          },
          locale,
        }),
      });
      await expect(response.data, `Layout should be updated`)
        .not.toBeNull();
    } catch (error: any) {
      throw new Error(`Failed to update layout: ${error.message}`);
    }
  }
});

async function cleanupLayoutApi({
  locale = `en`,
}: {
  locale?: 'en' | 'ru';
} = {}) {
  try {
    const response = await cmsFetch(`${ENDPOINT}?locale=${locale}`, {
      method: `DELETE`,
    });

    await expect(response.status, `Layout should be deleted with status 204`)
      .toEqual(204);
  } catch (error: any) {
    throw new Error(`Failed to delete test layout: ${error.message}`);
  }
}
