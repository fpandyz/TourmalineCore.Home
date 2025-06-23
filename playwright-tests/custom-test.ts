import { test as base } from '@playwright/test';
import fs from 'fs';
import { Breakpoint } from '../common/utils/enum';

export type CustomTestFixtures = {
  goto: (endpoint?: string) => void;
  apiImageMock: () => void;
  hideCookie: () => void;
  setViewportSize: (options?: { width?: number; height?: number }) => void
};

// https://playwright.dev/docs/test-fixtures
// Extend base playwright test
export const test = base.extend<CustomTestFixtures>({
  goto: async ({ page }, use) => {
    const goto = async (
      endpoint?: string,
    ) => {
      await page.goto(endpoint || '');
    };

    // Use the fixture value in the test
    await use(goto);
  },

  setViewportSize: async ({ page }, use) => {
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

  apiImageMock: async ({ page }, use) => {
    const PNG_STUB_FILE = fs.readFileSync('./public/images/stub.png');

    const regExp = /https?:\/\/[^/]+\/_next\/image\?([^&]*&)*url=([^&]*%2Fimages%2F[^&]+\.(png|jpg|jpeg|webp|gif|avif))(&[^&]*)*/i;

    const apiImageMock = async () => {
      await page.route(regExp, async (route, request) => {
        // Make sure that the browser is waiting for an image
        const accept = await request.headerValue('accept');
        const acceptsPng = accept?.includes('image/*');

        if (!acceptsPng) return route.continue();

        return route.fulfill({
          contentType: 'image/png',
          body: PNG_STUB_FILE,
        });
      });
    };

    await use(apiImageMock);
  },

  hideCookie: async ({ page }, use) => {
    const hideCookie = async () => {
      await page.getByTestId('cookie')
        .evaluate((element) => element.style.visibility = 'hidden');
    };

    await use(hideCookie);
  },
});

export { expect } from '@playwright/test';
