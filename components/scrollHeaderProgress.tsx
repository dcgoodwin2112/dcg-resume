import React, { useState, useEffect, CSSProperties } from "react"
import styled from "styled-components"
import COLORS from "../styles/colors"

interface CSSPropertiesWithVars extends CSSProperties {
  '--scroll-pos': number
}

export default function ScrollHeaderProgress() {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const windowScrollHeight = window.scrollY;
      const windowHeight = document.body.clientHeight - window.innerHeight;
      const progress = (windowScrollHeight / windowHeight) * 100;
      setScrollPos(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper role="progress" aria-valuemin={0} aria-valuenow={scrollPos} aria-valuemax={100}>
      <InnerWrapper style={{'--scroll-progress': `${scrollPos}%`} as React.CSSProperties}></InnerWrapper>
    </Wrapper>
  );

}

const Wrapper = styled.div`
  width: 100%;
  height: 3px;
  margin-block-end: 4px;
`;

const InnerWrapper = styled.div`
  width: var(--scroll-progress);
  height: 3px;
  background-color: ${COLORS.primary};
`;
