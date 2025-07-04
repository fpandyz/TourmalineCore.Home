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
    name: `DesktopTest`,
    breakpoint: Breakpoint.DESKTOP,
    breakpointName: BreakpointName.DESKTOP,
  },
  {
    name: `DesktopXlTest`,
    breakpoint: Breakpoint.DESKTOP_XL,
    breakpointName: BreakpointName.DESKTOP_XL,
  },
];
