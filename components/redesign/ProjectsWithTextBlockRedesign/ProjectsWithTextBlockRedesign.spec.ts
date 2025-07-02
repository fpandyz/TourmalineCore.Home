import { test } from '../../../playwright-tests/custom-test';
import { ComponentName } from '../../../common/utils/enum';
import { BREAKPOINTS } from '../../../playwright-tests/constants/breakpoints';

const TEST_ID = `projects-with-text-block-first`;

test.describe(`ProjectsWithTextBlock`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.PROJECTS_WITH_TEXT_BLOCK);
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
