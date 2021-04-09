import styled from "styled-components";
import COLORS from "../styles/colors"
import { FlexWrapper } from "./section";

type SectionContentProps = {
  children: React.ReactNode;
};

export default function SectionContent({ children }: SectionContentProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  ${FlexWrapper} & {
    flex: 1 1 100%;
  }

  & h3:first-of-type {
    margin-top: 0px;
  }
`;
