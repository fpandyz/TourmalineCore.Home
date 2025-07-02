import { test } from '../../../playwright-tests/custom-test';
import { ComponentName } from '../../../common/utils/enum';
import { BREAKPOINTS } from '../../../playwright-tests/constants/breakpoints';

const TEST_ID = `collage-with-title`;

test.describe(`CollageWithTitle`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.COLLAGE_WITH_TITLE);
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
