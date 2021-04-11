import styled from "styled-components";
import COLORS from "../styles/colors";
import BREAKPOINTS from "../styles/breakpoints"
import { useScrollPosition } from "../components/hooks/useScrollPosition";

export default function SiteFooter() {
  const scrollPosition = useScrollPosition(200);
  const nameAndTitle = (
    <>
      <span className="name">Dan&nbsp;Goodwin</span>
      <span className="title">Senior Web Application Developer</span>
    </>
  );
  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <ImageWrapper>
            <img
              src="/images/dcg-headshot-cropped-244.png"
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
  border-top: 10px solid ${COLORS.grayDark};
  border-bottom: 2px solid ${COLORS.grayLight};
  width: 100%;
  margin: 0 auto;
  font-family: Merriweather, serif;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding-block-start: 18px;
  padding-block-end: 18px;
  & h1 {
    text-align: center;
    font-size: 1.4rem;
  }
  & .name {
    display: inline;
    border-right: 2px solid ${COLORS.white};
    padding-right: 1rem;
    margin-right: 1rem;
  }
  & .title {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.bg};
    letter-spacing: 0.18rem;
  }
  @media (min-width: ${BREAKPOINTS.md +
    1}px) and (max-width: ${BREAKPOINTS.lg}px) {
    & img {
      height: 100px;
      width: 100px;
    }
  }
  @media (max-width: ${BREAKPOINTS.md}px) {
    & {
      padding-inline-start: 120px;
      padding-block-start: 20px;
      padding-block-end: 20px;
    }
    & h1 {
      text-align: left;
      font-size: 1rem;
    }
    & .name {
      display: block;
      border-right: none;
    }
    & .title {
      font-size: 0.9rem;
    }
    & img {
      height: 88px;
      width: 88px;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}px) {
    & h1 {
      font-size: 0.9rem;
    }
    & .title {
      font-size: 0.8rem;
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
  font-size: 1rem;
  padding-block-start: 4px;
  padding-block-end: 4px;

  & .name {
    border-right: 1px solid ${COLORS.white};
    padding-right: 1rem;
    margin-right: 1rem;
  }

  & .title {
    font-style: italic;
    font-size: 0.9rem;
    color: ${COLORS.grayLight};
  }

  @media (max-width: ${BREAKPOINTS.sm}px) {
    border-bottom: 1px solid ${COLORS.white};
    & .title {
      font-size: 0.8rem;
    }
  }
`;
