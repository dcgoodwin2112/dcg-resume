import { useState, useEffect } from "react";

type Position = "top" | "scroll";

export function useScrollPosition(breakpoint = 300): Position {
  const scrollBreakpoint = breakpoint;
  const [scrollPos, setScrollPos] = useState("top" as Position);

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;
      if (scroll < scrollBreakpoint && scrollPos !== "top") {
        setScrollPos("top");
      } else if (scroll >= scrollBreakpoint && scrollPos !== "scroll") {
        setScrollPos("scroll");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return scrollPos;
}
