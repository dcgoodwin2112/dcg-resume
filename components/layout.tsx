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
      <main>
        <ContentWrapper>{children}</ContentWrapper>
      </main>
      <SiteFooter />
    </div>
  );
}

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-inline-end: 18px;
`;
