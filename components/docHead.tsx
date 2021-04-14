import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

type DocHeadProps = {
  children?: React.ReactNode;
};

export default function DocHead({ children }: DocHeadProps) {
  const imgUrl =
    "https://resume.dcgoodwin.dev/images/og-image-dcgoodwin.jpg";
  const title = "Dan Goodwin";
  const description = "Sr. Full-stack Web Application Developer";
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans&Merriweather&display=swap" />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dcgoodwin2112" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imgUrl} />
        <meta name="twitter:image:alt" content="Photo of Dan Goodwin" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        {children}
      </Head>
    </>
  );
}
