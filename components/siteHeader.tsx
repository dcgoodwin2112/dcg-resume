import Image from "next/image";
import styled from "styled-components";
import COLORS from "../styles/colors";
import { useScrollPosition } from "../components/hooks/useScrollPosition";

export default function SiteFooter() {
  const scrollPosition = useScrollPosition(200);
  const headerPosition = scrollPosition === "top" ? "static" : "sticky";
  const nameAndTitle = (
    <>
      <span className="name">Dan&nbsp;Goodwin</span>
      <span className="spacer"> | </span>
      <span className="title">Senior Web Application Developer</span>
    </>
  );
  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <ImageWrapper>
            <Image
              src="/images/dcg-headshot-cropped.png"
              width={144}
              height={144}
              alt="Picture of Dan Goodwin"
            />
          </ImageWrapper>
          <h1>{nameAndTitle}</h1>
        </HeadingWrapper>
      </Wrapper>
      {scrollPosition === "scroll" && (
        <ScrollWrapper>{nameAndTitle}</ScrollWrapper>
      )}
    </>
  );
}

const Wrapper = styled.header``;

const HeadingWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: Merriweather, serif;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 25px 25px 22px 200px;
  border-top: 10px solid ${COLORS.grayDark};
  border-bottom: 2px solid ${COLORS.grayLight};

  & h1 {
    font-size: 1.7rem;
  }

  & .name {
    display: block;
  }

  & .spacer {
    display: none;
    font-family: Open Sans, sans-serif;
  }

  & .title {
    font-size: 1.3rem;
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.bg};
    letter-spacing: 0.18rem;
  }

  @media (min-width: 1101px) {
    & .name,
    & .spacer {
      display: inline;
    }
  }

  @media (max-width: 1100px) {
    & .title {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    & .title {
      font-size: 1rem;
    }
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;

const ScrollWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: ${COLORS.grayDark};
  color: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.primaryLight};
  font-family: Merriweather, serif;
  font-size: 1.1rem;
  padding-block: 8px;

  & .spacer {
    font-family: Open Sans, sans-serif;
  }

  & .title {
    font-style: italic;
    font-size: 1rem;
    color: ${COLORS.grayLight};
  }
`;
