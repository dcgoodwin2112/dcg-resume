import Layout from "../components/layout"
import DocHead from "../components/docHead"
import Section from "../components/section";
import SectionTitle from "../components/sectionTitle";
import SectionContent from "../components/sectionContent"
import About from "../content/about.mdx";
import Technologies from "../content/technologies.mdx";
import Certifications from "../content/certifications.mdx";
import Experience from "../content/experience.mdx";
import Education from "../content/education.mdx"
import Contact from "../content/contact.mdx";

export default function Home() {
  return (
    <>
      <Layout>
        <DocHead />
        <Section>
          <SectionTitle>About</SectionTitle>
          <SectionContent>
            <About />
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Skills and Technologies</SectionTitle>
          <SectionContent>
            <Technologies />
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <SectionContent>
            <Experience />
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Education</SectionTitle>
          <SectionContent>
            <Education />
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <SectionContent>
            <Certifications />
          </SectionContent>
        </Section>
        <Section excludePrint={true}>
          <SectionTitle>Contact</SectionTitle>
          <SectionContent>
            <Contact />
          </SectionContent>
        </Section>
      </Layout>
    </>
  );
}
