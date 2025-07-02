import { test } from '../../../playwright-tests/custom-test';
import { ComponentName } from '../../../common/utils/enum';
import { BREAKPOINTS } from '../../../playwright-tests/constants/breakpoints';

const TEST_ID = `signpost-multiple-articles`;

test.describe(`SignpostMultipleTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.SIGNPOST_MULTIPLE);
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
