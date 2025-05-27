import useMediaQuery from "./useMediaQuery";

type Breakpoints = {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  isBelowMd: boolean;
  isBelowLg: boolean;
  isAboveSm: boolean;
  active: "sm" | "md" | "lg" | "xl";
};

/**
 * A custom hook that returns the current responsive breakpoints.
 *
 * @returns {Breakpoints} An object containing the boolean values for each breakpoint and the currently active breakpoint.
 */
const useBreakpoints = () => {
  const breakpoints: Breakpoints = {
    isSm: useMediaQuery("(max-width: 767px)"),
    isMd: useMediaQuery("(min-width: 768px) and (max-width: 1149px)"),
    isLg: useMediaQuery("(min-width: 1150px) and (max-width: 1440px)"),
    isXl: useMediaQuery("(min-width: 1441px)"),
    isBelowMd: useMediaQuery("(max-width: 1149px)"),
    isBelowLg: useMediaQuery("(max-width: 1440px)"),
    isAboveSm: useMediaQuery("(min-width: 768px)"),
    active: "sm",
  };
  if (breakpoints.isMd) breakpoints.active = "md";
  else if (breakpoints.isLg) breakpoints.active = "lg";
  else if (breakpoints.isXl) breakpoints.active = "xl";
  return breakpoints;
};

export default useBreakpoints;
