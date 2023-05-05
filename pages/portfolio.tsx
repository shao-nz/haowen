import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageZoom from "../components/ImageZoom";

import { Rokkitt } from "@next/font/google";

const rokkitt = Rokkitt({
  weight: "400",
  subsets: ["latin"],
});

export default function Portfolio() {
  const imageRefs = useRef(new Array());
  const listRefs = useRef(new Array());
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener("resize", (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);

  const hideListItem = (section) => {
    for (const ref of listRefs.current) {
      if (!ref) continue;
      if (ref.id === section) {
        ref.childNodes[0].classList.add("font-neutral-face-bold");
        ref.childNodes[1].classList.remove("hidden");
      } else {
        ref.childNodes[0].classList.remove("font-neutral-face-bold");
        ref.childNodes[1].classList.add("hidden");
      }
    }
  };

  useEffect(() => {
    if (pageHeight === 0) {
      return;
    }

    const observerMargin = Math.floor(pageHeight / 2);

    const observerOptions = {
      rootMargin: `-${
        pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      for (const [index, entry] of entries.entries()) {
        const section = entry.target.getAttribute("alt").split("-")[0];
        if (entry.isIntersecting) {
          hideListItem(section);
        }
      }
    }, observerOptions);

    for (const ref of imageRefs.current.reverse()) {
      ref && observer.observe(ref);
    }

    return () => observer.disconnect();
  });

  return (
    <>
      <Head>
        <title>Hao Wen</title>
        <meta name="description" content="Hao Wen's portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen mx-8 flex flex-col">
        <Navbar />
        <main
          className={`text-left flex flex-col justify-center items-center border-t border-black py-16 ${rokkitt.className}`}
        >
          <div className="mx-10 lg:mt-16">
            <div className="hidden lg:block fixed font-neutral-face lg:w-72 text-lg">
              <ul>
                <div id="resume" ref={(e) => listRefs.current.push(e)}>
                  <li className="pb-1">RESUME</li>
                  <ul className="hidden list-[upper-roman] last:pb-1 animate-show-list-item"></ul>
                </div>

                <div id="pyrmont" ref={(e) => listRefs.current.push(e)}>
                  <li>PYRMONT BATHHOUSE</li>
                  <ul className="hidden list-[upper-roman] last:pb-1 animate-show-list-item">
                    <li className="leading-none ml-10">MASTER RENDER</li>
                    <li className="leading-none ml-10">PROJECT BRIEF</li>
                    <li className="leading-none ml-10">MASTER SECTIONS</li>
                    <li className="leading-none ml-10">MASTER PLANS</li>
                    <li className="leading-none ml-10">RENDERINGS</li>
                  </ul>
                </div>

                <div id="ripple" ref={(e) => listRefs.current.push(e)}>
                  <li>THE RIPPLE</li>
                  <ul className="hidden list-[upper-roman] last:pb-1 animate-show-list-item">
                    <li className="leading-none ml-10">
                      PROJECT BRIEF <br /> MASTER RENDER
                    </li>
                    <li className="leading-none ml-10">
                      PARTI DIAGRAM <br /> MASTER PLAN
                    </li>
                    <li className="leading-none ml-10">PERSPECTIVE SECTION</li>
                    <li className="leading-none ml-10">
                      INTERIOR RENDERING <br /> DETAIL DIAGRAM
                    </li>
                  </ul>
                </div>

                <div id="slipway" ref={(e) => listRefs.current.push(e)}>
                  <li>THE SLIPWAY</li>
                  <ul className="hidden list-[upper-roman] animate-show-list-item">
                    <li className="leading-none ml-10">MASTER RENDER</li>
                    <li className="leading-none ml-10">PROJECT SITE</li>
                    <li className="leading-none ml-10">
                      PLAN <br /> RENDERING
                    </li>
                    <li className="leading-none ml-10">PHYSICAL MODELS</li>
                  </ul>
                </div>

                <div id="weaving" ref={(e) => listRefs.current.push(e)}>
                  <li>THE WEAVING</li>
                  <ul className="hidden list-[upper-roman] animate-show-list-item">
                    <li className="leading-none ml-10">MASTER RENDER</li>
                    <li className="leading-none ml-10">SITE ANALYSIS</li>
                    <li className="leading-none ml-10">
                      DIAGRAMS BY BRIAN YUNG & AUDREY CHAK <br /> RENDERING
                    </li>
                  </ul>
                </div>

                <div id="ephemerality" ref={(e) => listRefs.current.push(e)}>
                  <li>EPHEMERALITY</li>
                  <ul className="hidden list-[upper-roman] animate-show-list-item">
                    <li className="leading-none ml-10">MASTER RENDER</li>
                    <li className="leading-none ml-10">PLAN</li>
                    <li className="leading-none ml-10">INTERIOR RENDER</li>
                  </ul>
                </div>

                <div id="courtyard" ref={(e) => listRefs.current.push(e)}>
                  <li>COURTYARD HOUSE</li>
                  <ul className="hidden list-[upper-roman] last:pb-1 animate-show-list-item">
                    <li className="leading-none ml-10">MASTER RENDER</li>
                    <li className="leading-none ml-10">
                      DEMOLITION PLAN <br /> PROPOSAL PLAN
                    </li>
                    <li className="leading-none ml-10">
                      PROPOSAL SECTION <br /> DESIGN CHOICES
                    </li>
                  </ul>
                </div>
              </ul>
            </div>

            <div className="flex flex-col gap-12 items-center lg:items-end">
              {/* <ImageZoom ref={(element) => imageRefs.current[1] = element} imgSrc='/pages/website2.jpg' alt='resume' /> */}
              <Image
                ref={(element) => (imageRefs.current[0] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website2.jpg"
                alt="resume"
                priority={true}
              />
              <Image
                ref={(element) => (imageRefs.current[1] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website3.jpg"
                alt="pyrmont-1"
              />
              <Image
                ref={(element) => (imageRefs.current[2] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website4.jpg"
                alt="pyrmont-2"
              />
              <Image
                ref={(element) => (imageRefs.current[3] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website5.jpg"
                alt="pyrmont-3"
              />
              <Image
                ref={(element) => (imageRefs.current[4] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website6.jpg"
                alt="pyrmont-4"
              />
              <Image
                ref={(element) => (imageRefs.current[5] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website7.jpg"
                alt="pyrmont-5"
              />
              <Image
                ref={(element) => (imageRefs.current[6] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website8.jpg"
                alt="pyrmont-6"
              />
              <Image
                ref={(element) => (imageRefs.current[7] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website9.jpg"
                alt="ripple-1"
              />
              <Image
                ref={(element) => (imageRefs.current[8] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website10.jpg"
                alt="ripple-2"
              />
              <Image
                ref={(element) => (imageRefs.current[9] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website11.jpg"
                alt="ripple-3"
              />
              <Image
                ref={(element) => (imageRefs.current[10] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website12.jpg"
                alt="ripple-4"
              />
              <Image
                ref={(element) => (imageRefs.current[11] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website13.jpg"
                alt="ripple-5"
              />
              <Image
                ref={(element) => (imageRefs.current[12] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website14.jpg"
                alt="slipway-1"
              />
              <Image
                ref={(element) => (imageRefs.current[13] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website15.jpg"
                alt="slipway-2"
              />
              <Image
                ref={(element) => (imageRefs.current[14] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website16.jpg"
                alt="slipway-3"
              />
              <Image
                ref={(element) => (imageRefs.current[15] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website17.jpg"
                alt="slipway-4"
              />
              <Image
                ref={(element) => (imageRefs.current[16] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website18.jpg"
                alt="slipway-5"
              />
              <Image
                ref={(element) => (imageRefs.current[17] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website19.jpg"
                alt="weaving-1"
              />
              <Image
                ref={(element) => (imageRefs.current[18] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website20.jpg"
                alt="weaving-2"
              />
              <Image
                ref={(element) => (imageRefs.current[19] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website21.jpg"
                alt="weaving-3"
              />
              <Image
                ref={(element) => (imageRefs.current[20] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website22.jpg"
                alt="weaving-4"
              />
              <Image
                ref={(element) => (imageRefs.current[21] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website23.jpg"
                alt="ephemerality-1"
              />
              <Image
                ref={(element) => (imageRefs.current[22] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website24.jpg"
                alt="ephemerality-2"
              />
              <Image
                ref={(element) => (imageRefs.current[23] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website25.jpg"
                alt="ephemerality-3"
              />
              <Image
                ref={(element) => (imageRefs.current[24] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website26.jpg"
                alt="ephemerality-4"
              />
              <Image
                ref={(element) => (imageRefs.current[25] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website27.jpg"
                alt="courtyard-1"
              />
              <Image
                ref={(element) => (imageRefs.current[26] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website28.jpg"
                alt="courtyard-2"
              />
              <Image
                ref={(element) => (imageRefs.current[27] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website29.jpg"
                alt="courtyard-3"
              />
              <Image
                ref={(element) => (imageRefs.current[28] = element)}
                className="border border-black w-3/4"
                width={0}
                height={0}
                sizes="100vw"
                src="/pages/website30.jpg"
                alt="courtyard-4"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
