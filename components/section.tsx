import styled from "styled-components";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <FlexWrapper>{children}</FlexWrapper>;
}

export const FlexWrapper = styled.section`
  display: flex;
  padding-block: 18px;
`;
