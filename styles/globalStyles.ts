import { createGlobalStyle } from "styled-components";
import COLORS from "./colors";
import BREAKPOINTS from "./breakpoints";

const GlobalStyles = createGlobalStyle`
/* CSS Reset */
/* https://piccalil.li/blog/a-modern-css-reset */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Custom Global Styles */
html {
  font-family: 'Open Sans', -apple-system, sans-serif;
  color: ${COLORS.text};
  font-size: 18px;
}

p {
  line-height: 1.6rem;
  margin-block-end: 10px;
}

a {
  color: ${COLORS.primary}
}

a:hover {
  cursor: pointer;
  text-decoration: none;
  color: ${COLORS.primaryDark};
}

h3 {
  font-family: Merriweather, serif;
  font-size: 1.45rem;
  font-weight: normal;
  margin-block-start: 28px;
  margin-block-end: 4px;
}

ol, ul {
  color: ${COLORS.grayDark};
  padding-left: 20px;
}

time {
  font-style: italic;
}

.org-name {
  letter-spacing: .08rem;
}

@media (max-width: ${BREAKPOINTS.sm}px) {
  h3 {
    font-size: 1.3rem;
  }
}

@media print {
  html {
    font-size: 14px;
  }

  h3 {
    margin-block-start: 26px;
    margin-block-end: 4px;
  }

  ol, ul {
    font-size: 0.9rem;
  }

  .exclude-print {
    display: none;
  }
}
`;

export default GlobalStyles;
