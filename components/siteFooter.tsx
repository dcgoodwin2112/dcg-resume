import styled from "styled-components";
import COLORS from "../styles/colors";

export default function SiteFooter() {
  return (
    <>
      <Wrapper>
        <a href="https://github.com/dcgoodwin2112/dcg-resume">View on Github</a>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.footer`
  border-top: 1px solid ${COLORS.grayLight};
  background-color: ${COLORS.grayDark};
  color: ${COLORS.white};
  text-align: center;
  padding-block-start: 6px;
  padding-block-end: 6px;
  font-size: 0.9rem;

  & a {
    color: ${COLORS.white};
  }

  & a:hover {
    color: ${COLORS.primaryLight};
  }

  @media print {
    display: none;
  }
`;
