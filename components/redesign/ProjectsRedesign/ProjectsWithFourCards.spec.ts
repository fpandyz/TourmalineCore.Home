import { test } from '../../../playwright-tests/custom-test';
import { ComponentName } from '../../../common/utils/enum';
import { BREAKPOINTS } from '../../../playwright-tests/constants/breakpoints';

const TEST_ID = `projects-with-four-cards`;

test.describe(`ProjectsWithFourCards`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.PROJECTS_WITH_FOUR_CARDS);
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
