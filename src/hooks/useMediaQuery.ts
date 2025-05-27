import { useEffect, useState } from "react";

/**
 * A custom hook that listens to a media query and returns whether it matches the current screen size.
 *
 * @param {string} query - The media query string to match against.
 * @returns {boolean} A boolean value indicating whether the media query matches the current screen size.
 *
 * @example
 * const isSmallScreen = useMediaQuery("(max-width: 640px)");
 */
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(
    () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // Empty array ensures effect is only run on mount and unmount
  );
  return matches;
};

export default useMediaQuery;
