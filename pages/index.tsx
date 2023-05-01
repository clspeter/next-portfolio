import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
      <Head>
        <title>Peter&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience  */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
    </div>
  );
}
