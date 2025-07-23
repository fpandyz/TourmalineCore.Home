import { test } from '../../../playwright-tests/custom-test';
import { BREAKPOINTS } from '../../../playwright-tests/constants/breakpoints';
import { ComponentName } from '../../../common/enums';

const TEST_ID = `header-redesign`;

test.describe(`Header`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HEADER);
  });

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
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
