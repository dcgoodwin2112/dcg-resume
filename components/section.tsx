import styled from "styled-components";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <FlexWrapper>{children}</FlexWrapper>;
}

export const FlexWrapper = styled.section`
  display: flex;
  margin-block-start: 36px;
  margin-block-end: 36px;
`;
