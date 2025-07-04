import { Breakpoint, BreakpointName } from "../../common/enums";

export const BREAKPOINTS = [
  {
    name: `MobileTest`,
    breakpoint: Breakpoint.MOBILE,
    breakpointName: BreakpointName.MOBILE,
  },
  {
    name: `TabletTest`,
    breakpoint: Breakpoint.TABLET,
    breakpointName: BreakpointName.TABLET,
  },
  {
    name: `TabletXlTest`,
    breakpoint: Breakpoint.TABLET_XL,
    breakpointName: BreakpointName.TABLET_XL,
  },
  {
    name: `DesktopTest`,
    breakpoint: Breakpoint.DESKTOP,
    breakpointName: BreakpointName.DESKTOP,
  },
];
