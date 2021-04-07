import styled from "styled-components";

type SectionTitleProps = {
  children: React.ReactNode;
};

const Wrapper = styled.h2`
  font-family: serif;
`;

export default function SectionTitle({ children }: SectionTitleProps) {
  return <Wrapper>{children}</Wrapper>;
}
