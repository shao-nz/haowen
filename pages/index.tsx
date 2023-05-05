import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageZoom from "../components/ImageZoom";
import { Rokkitt } from "@next/font/google";

const rokkitt = Rokkitt({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Hao Wen</title>
        <meta name="description" content="Hao Wen's portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="h-screen mx-8 flex flex-col">
        <Navbar />
        <main
          className={`h-[90vh] text-left flex flex-col justify-center items-center border border-black py-16 ${rokkitt.className}`}
        >
          <div>
            <Image
              src="/photo.jpg"
              alt="photo of Hao Wen"
              width={494}
              height={509}
              className="pb-2"
            />
            <h1 className="text-3xl font-neutral-face-bold">
              I&#39;m Hao Wen.
            </h1>
            <p className="font-neutral-face">THIRD YEAR ARCHITECTURE STUDENT</p>
            <div className="list-none flex flex-col content-end">
              <ul>
                <li className="text-lg underline text-right">
                  <Link href="/portfolio">PORTFOLIO</Link>
                </li>
                <li className="text-lg underline text-right">
                  <Link href="https://issuu.com/haowenarchitecture">
                    INDIVIDUAL WORKS
                  </Link>
                </li>
                <li className="text-lg underline text-right">
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
