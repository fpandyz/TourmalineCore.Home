import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '../../../../../playwright-tests/custom-test';
import { ComponentName } from '../../../../../common/enums';
import { BREAKPOINTS } from '../../../../../playwright-tests/constants/breakpoints';

const TEST_ID = `header-popup`;

test.describe(`HeaderPopupTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HEADER_POPUP);
  });

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS.slice(0, 2)) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: TEST_ID,
        breakpoint,
        breakpointName,
      });
    });
  }

  test(`ShowAccordionTest`, showAccordion);
});

async function showAccordion({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures["setViewportSize"];
}) {
  await setViewportSize();

  await page.getByTestId(`header-accordion-button`)
    .first()
    .click();

  await expect(page.getByTestId(`header-popup`))
    .toHaveScreenshot(`${TEST_ID}-accordion.png`);
}
