import styled from "styled-components";
import { FlexWrapper } from "./section";
import COLORS from "../styles/colors";
import BREAKPOINTS from "../styles/breakpoints"

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Wrapper>
      <HeaderWrapper>{children}</HeaderWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.aside`
  ${FlexWrapper} & {
    flex: 0 1 100px;
    writing-mode: vertical-lr;
    align-self: stretch;
  }

  @media (max-width: 899px) {
    ${FlexWrapper} & {
      flex: 0 1 65px;
    }
  }

  @media (max-width: 450px) {
    ${FlexWrapper} & {
      flex: 0 1 52px;
    }
  }
`;

const HeaderWrapper = styled.h2`
  padding-inline: 6px;
  border-right: 3px solid ${COLORS.primaryLight};
  height: 100%;
  text-align: start;
  text-transform: uppercase;
  color: ${COLORS.grayMed};

  @media (max-width: ${BREAKPOINTS.md}px) {
    font-size: 1.1rem;
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    border-right: 1px solid ${COLORS.primaryLight};
    background-color: ${COLORS.grayDark};
    color: ${COLORS.white};
    font-size: 0.8rem;
  }
`;
