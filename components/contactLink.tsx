import styled from "styled-components";

type ContactLinkProps = {
  children: React.ReactNode;
  linkText: string;
  linkUrl: string;
};

export default function ContactLink({
  children,
  linkText,
  linkUrl,
}: ContactLinkProps) {
  return (
    <Wrapper>
      <LinkWrapper href={linkUrl}>
        <IconWrapper>{children}</IconWrapper>
        <SpanWrapper>{linkText}</SpanWrapper>
      </LinkWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-block-start: 12px;
  margin-block-end: 12px;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  display: flex;
`;

const IconWrapper = styled.div`
  flex-basis: 36px;
`;

const SpanWrapper = styled.span`
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;
