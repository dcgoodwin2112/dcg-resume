import Head from "next/head";
import Layout from "../components/layout"
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import About from "../content/about.mdx";
import Technologies from "../content/technologies.mdx";
import Certifications from "../content/certifications.mdx";
import Experience from "../content/experience.mdx";
import Education from "../content/education.mdx"

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Dan Goodwin | Sr. Full-stack Web Application Developer</title>
        </Head>
        <Section>
          <SectionTitle>About</SectionTitle>
          <About />
        </Section>
        <Section>
          <SectionTitle>Skills and Technologies</SectionTitle>
          <Technologies />
        </Section>
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <Certifications />
        </Section>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <Experience />
        </Section>
        <Section>
          <SectionTitle>Education</SectionTitle>
          <Education />
        </Section>
      </Layout>
    </>
  );
}
