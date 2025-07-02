import { Breakpoint, BreakpointName } from "../../common/utils/enum";

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
    name: `DesktopTest`,
    breakpoint: Breakpoint.DESKTOP,
    breakpointName: BreakpointName.DESKTOP,
  },
];