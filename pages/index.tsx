import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Peter&apos;s Portfolio</title>
      </Head>
      <h1 className="text-white text-4xl">let&apos;s build amaozn portfolio</h1>
    </div>
  );
}
