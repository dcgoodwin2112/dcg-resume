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
        <meta name="description">Sr. Full-stack Web Application Developer</meta>
        {children}
      </Head>
    </>
  );
}
