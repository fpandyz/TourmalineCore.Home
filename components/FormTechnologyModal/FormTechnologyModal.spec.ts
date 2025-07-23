import { test } from '../../playwright-tests/custom-test';
import { ComponentName } from '../../common/enums';
import { BREAKPOINTS } from '../../playwright-tests/constants/breakpoints';

const TEST_ID = `form-technology-modal`;

test.describe(`FormTechnologyModal`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.FORM_TECHNOLOGY_MODAL);
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
