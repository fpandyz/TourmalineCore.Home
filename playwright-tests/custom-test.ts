import { test as base } from '@playwright/test';
import fs from 'fs';
import { Breakpoint } from '../common/utils/enum';

export type CustomTestFixtures = {
  apiImageMock: () => void;
  hideCookie: () => void;
  goToComponentsPage: (path: string) => void;
  setViewportSize: (options?: { width?: number; height?: number; }) => void;
};

// https://playwright.dev/docs/test-fixtures
// Extend base playwright test
export const test = base.extend<CustomTestFixtures>({
  goToComponentsPage: async ({
    page,
    apiImageMock,
    hideCookie,
  }, use) => {
    const goToComponentsPage = async (path: string) => {
      await apiImageMock();

      // interrupting the connection for gif, for more stable work of tests
      await page.route(`**/**.gif`, (route) => route.abort());

      await page.goto(`/ru/components/${path}`, {
        waitUntil: `networkidle`,
      });

      await hideCookie();
    };

    await use(goToComponentsPage);
  },

  setViewportSize: async ({
    page,
  }, use) => {
    const setViewportSize = async ({
      width = Breakpoint.MOBILE,
      height = 768,
    }: {
      width?: number;
      height?: number;
    } = {}) => {
      await page.setViewportSize({
        width,
        height,
      });
    };

    await use(setViewportSize);
  },

  apiImageMock: async ({
    page,
  }, use) => {
    const PNG_STUB_FILE = fs.readFileSync(`./playwright-tests/fixtures/stub.png`);

    const apiImageMock = async () => {
      await page.route(`**/_next/image*`, async (route, request) => {
        // Make sure that the browser is waiting for an image
        const accept = await request.headerValue(`accept`);
        const acceptsPng = accept?.includes(`image/*`);

        if (!acceptsPng) return route.continue();

        return route.fulfill({
          contentType: `image/png`,
          body: PNG_STUB_FILE,
        });
      });
    };

    await use(apiImageMock);
  },

  hideCookie: async ({
    page,
  }, use) => {
    const hideCookie = async () => {
      await page.getByTestId(`cookie`)
        .evaluate((element) => element.style.visibility = `hidden`);
    };

    await use(hideCookie);
  },
});

export {
  expect,
  type Page,
} from '@playwright/test';
