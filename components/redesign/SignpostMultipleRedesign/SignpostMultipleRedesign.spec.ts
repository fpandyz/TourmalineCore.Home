import { Page } from '@playwright/test';
import { test, expect, CustomTestFixtures } from '../../../playwright-tests/custom-test';
import { Breakpoint, BreakpointName } from '../../../common/utils/enum';

const TEST_ID = `signpost-multiple-articles`;

test.describe(`SignpostMultipleTests`, () => {
  test.beforeEach(async ({
    goto,
    hideCookie,
  }) => {
    await goto();

    await hideCookie();
  });

  test(`MobileTest`, mobileTest);

  test(`DesktopTest`, desktopTest);
});

async function mobileTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize();

  await expect(getSignpostMultipleArticlesRedesignByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.MOBILE}.png`);
}

async function desktopTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await expect(getSignpostMultipleArticlesRedesignByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP}.png`);
}

function getSignpostMultipleArticlesRedesignByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
