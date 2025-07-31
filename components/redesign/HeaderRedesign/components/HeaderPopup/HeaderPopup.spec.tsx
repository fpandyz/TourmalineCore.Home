import { test } from '../../../../../playwright-tests/custom-test';
import { ComponentName } from '../../../../../common/enums';
import { BREAKPOINTS } from '../../../../../playwright-tests/constants/breakpoints';

const TEST_ID = `header-popup`;

test.describe(`HeaderPopupRedesign`, () => {
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
});
