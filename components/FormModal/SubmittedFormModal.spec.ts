import { test } from '../../playwright-tests/custom-test';
import { ComponentName } from '../../common/enums';
import { BREAKPOINTS } from '../../playwright-tests/constants/breakpoints';

const TEST_ID = `submitted-form-modal`;

test.describe(`SubmittedFormModal`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.SUBMITTED_FORM_MODAL);
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
