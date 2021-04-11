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
      <LinkWrapper href={linkUrl} tabIndex={-1}>
        {children}
      </LinkWrapper>
      <LinkWrapper href={linkUrl}>{linkText}</LinkWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-block-start: 12px;
  margin-block-end: 12px;
  display: flex;
`;

const LinkWrapper = styled.a`
  flex-basis: 36px;
`;
