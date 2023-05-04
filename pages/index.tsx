import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WrokExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "../components/ContactMe";
import { PageInfo, Experience, Project, Skill, Social } from "@/typing";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperiences";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchSkills } from "@/utils/fetchSkills";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import experience from "@/next-portfolio-sanity/schemas/experience";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  const title = `${pageInfo?.name}'s Portfolio`;

  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-500">
      <Head>
        <title>{title}</title>
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WrokExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfoQuery = groq`*[_type == "pageInfo"][0]`;
  const experienceQuery = groq`*[_type == "experience"]{
    ...,
    technologies[]->
} | order(dateStarted desc)`;
  const projectQuery = groq`*[_type == "project"] {
    ...,
    technologies[]->
}`;
  const skillQuery = groq`*[_type == "skill"]`;
  const socialQuery = groq`*[_type == "social"]`;

  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);
  const experiences: Experience[] = await sanityClient.fetch(experienceQuery);
  const projects: Project[] = await sanityClient.fetch(projectQuery);
  const skills: Skill[] = await sanityClient.fetch(skillQuery);
  const socials: Social[] = await sanityClient.fetch(socialQuery);

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 60,
  };
};
