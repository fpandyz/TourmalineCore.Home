import { BreakpointName } from "../../common/utils/enum";
import { CustomTestFixtures, test } from "../custom-test";

test.describe(`Analyzing pages for accessibility using axe core `, () => {
  test.describe(`Check home page`, () => {
    test.beforeEach(async ({
      goto,
    }) => {
      await goto();
    });

    test(`MobileTest`, mobileTest);

    test(`TabletTest`, tabletTest);

    test(`DesktopTest`, desktopTest);
  });
});

async function mobileTest({
  axeCheckAndWriteReport,
}: {
  axeCheckAndWriteReport: CustomTestFixtures['axeCheckAndWriteReport'];
}) {
  await axeCheckAndWriteReport({
    pageName: `home`,
    viewport: BreakpointName.MOBILE,
  });
}

async function tabletTest({
  axeCheckAndWriteReport,
}: {
  axeCheckAndWriteReport: CustomTestFixtures['axeCheckAndWriteReport'];
}) {
  await axeCheckAndWriteReport({
    pageName: `home`,
    viewport: BreakpointName.TABLET,
  });
}

async function desktopTest({
  axeCheckAndWriteReport,
}: {
  axeCheckAndWriteReport: CustomTestFixtures['axeCheckAndWriteReport'];
}) {
  await axeCheckAndWriteReport({
    pageName: `home`,
    viewport: BreakpointName.DESKTOP,
  });
}
