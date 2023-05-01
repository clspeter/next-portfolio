import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll">
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
      {/* Skills  */}

      {/* Projects  */}

      {/* Contact Me */}
    </div>
  );
}
