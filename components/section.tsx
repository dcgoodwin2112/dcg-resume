import styled from "styled-components";

type SectionProps = {
  children: React.ReactNode;
  excludePrint?: boolean;
};

export default function Section({ children, excludePrint = false }: SectionProps) {
  if (excludePrint) {
    return <FlexWrapperNoPrint>{children}</FlexWrapperNoPrint>;
  }
  else {
    return <FlexWrapper>{children}</FlexWrapper>;
  }

}

export const FlexWrapper = styled.section`
  display: flex;
  margin-block-start: 36px;
  margin-block-end: 36px;
`;

export const FlexWrapperNoPrint = styled(FlexWrapper)`
  @media print {
    display: none;
  }
`
