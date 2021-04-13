import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

type DocHeadProps = {
  children?: React.ReactNode;
};

export default function DocHead({ children }: DocHeadProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans&Merriweather&display=swap" />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Dan Goodwin</title>
        <meta
          name="description"
          content="Sr. Full-stack Web Application Developer"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dcgoodwin2112" />
        <meta name="twitter:title" content="Dan Goodwin" />
        <meta
          name="twitter:description"
          content="Sr. Full-stack Web Application Developer."
        />
        <meta
          name="twitter:image"
          content="https://resume.dcgoodwin.dev/images/dcg-headshot-cropped-244.png"
        />
        <meta name="twitter:image:alt" content="Photo of Dan Goodwin" />
        {children}
      </Head>
    </>
  );
}
