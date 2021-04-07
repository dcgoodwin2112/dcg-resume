import SiteHeader from "./siteHeader";
import SiteFooter from "./siteFooter";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
