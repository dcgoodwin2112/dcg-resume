import styled from "styled-components";
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
    margin-inline-start: 24px;
  }

  & h3 {
    margin-inline-start: -24px;
  }

  & h3:first-of-type {
    margin-top: 0px;
  }
`;
