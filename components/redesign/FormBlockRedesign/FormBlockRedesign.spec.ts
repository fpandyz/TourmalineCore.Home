import { Browser } from '@playwright/test';
import { expect, test } from '../../../playwright-tests/custom-test';
import { BREAKPOINTS } from '../../../playwright-tests/constants/breakpoints';
import { AppRoute, ComponentName } from '../../../common/enums';

const TEST_ID = `form-block`;

test.describe(`FormBlockScreenshotTests`, () => {
  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
    test(name, async ({
      testScreenshotAtBreakpoint,
      goToComponentsPage,
    }) => {
      await goToComponentsPage(ComponentName.FORM_BLOCK);

      await testScreenshotAtBreakpoint({
        testId: TEST_ID,
        breakpoint,
        breakpointName,
      });
    });
  }

  test.describe(`FormDisplayDependingOnGeolocationTests`, () => {
    test(`FormIsDisplayedInRussiaCountryTest`, formIsDisplayedInRussiaTest);

    test(`FormIsNotDisplayedOutsideOfRussia`, formIsNotDisplayedOutsideOfRussia);
  });
});

async function formIsNotDisplayedOutsideOfRussia({
  browser,
}: {
  browser: Browser;
}) {
  // Set American coordinates
  const context = await browser.newContext({
    permissions: [`geolocation`],
    geolocation: {
      latitude: 38.7946,
      longitude: 106.5348,
    },
  });

  const page = await context.newPage();

  await page.goto(AppRoute.Main);

  await expect(page.getByTestId(TEST_ID))
    .not
    .toBeVisible();

  await browser.close();
}

async function formIsDisplayedInRussiaTest({
  browser,
}: {
  browser: Browser;
}) {
  // Set Russian coordinates
  const context = await browser.newContext({
    permissions: [`geolocation`],
    geolocation: {
      latitude: 61.5240,
      longitude: 105.3188,
    },
  });

  const page = await context.newPage();

  await page.goto(AppRoute.Main);

  await expect(page.getByTestId(TEST_ID))
    .toBeVisible();

  await browser.close();
}
