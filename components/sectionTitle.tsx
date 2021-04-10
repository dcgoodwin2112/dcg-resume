import styled from "styled-components";
import { FlexWrapper } from "./section";
import COLORS from "../styles/colors";

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
    flex: 0 1 75px;
    writing-mode: vertical-lr;
    align-self: stretch;
  }
`;

const HeaderWrapper = styled.h2`
  padding-inline: 6px;
  border-right: 4px solid ${COLORS.primaryLight};
  height: 100%;
  text-align: start;
  text-transform: uppercase;
  color: ${COLORS.grayMed}
`;
