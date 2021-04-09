import styled from "styled-components";
import SiteHeader from "./siteHeader";
import SiteFooter from "./siteFooter";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SiteHeader />
      <ContentWrapper>{children}</ContentWrapper>
      <SiteFooter />
    </div>
  );
}

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 8px 12px 8px 0;
`;
