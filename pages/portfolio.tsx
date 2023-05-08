import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageZoom from "../components/ImageZoom";
import projectDescriptions from "../public/projectDescriptions.json";

import { Rokkitt } from "@next/font/google";

import { getSortedPagesData } from "./api/pages";

export async function getStaticProps() {
  const allPagesData = getSortedPagesData();
  return {
    props: {
      allPagesData,
    },
  };
}

const rokkitt = Rokkitt({
  weight: "400",
  subsets: ["latin"],
});

export default function Portfolio({ allPagesData }) {
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

  const renderSidebar = () => {
    return (
      <div className="hidden lg:block fixed font-neutral-face lg:w-72 text-lg">
        <ul>
          {projectDescriptions.map((project) => {
            return (
              <div
                id={project.name}
                ref={(e) => listRefs.current.push(e)}
                key={project.name}
              >
                <li>{project.name}</li>
                <ul className="hidden list-[upper-roman] last:pb-1 animate-show-list-item">
                  {project.descriptions.map((description, index) => {
                    return (
                      <li
                        className={`${
                          description === "" && "hidden"
                        } leading-none ml-10 whitespace-pre-line`}
                        key={index}
                      >
                        {description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    );
  };

  const renderProjects = () => {
    let imageCounter = 0;
    return (
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 items-center lg:items-end">
        {allPagesData.map((project) => {
          const name = project.proj;
          const projPaths = project.projPaths;
          return projPaths.map((path, pathIndex) => {
            return (
              <ImageZoom
                ref={(e) => {
                  imageRefs.current[imageCounter++] = e;
                }}
                imgSrc={path}
                alt={`${name}-${pathIndex + 1}`}
                key={`${name}-${pathIndex + 1}`}
              />
              // <Image
              //   ref={(e) => (imageRefs.current[imageCounter++] = e)}
              //   className="border border-black w-3/4"
              //   width={0}
              //   height={0}
              //   sizes="100vw"
              //   src={path}
              //   alt={`${name}-${pathIndex + 1}`}
              //   key={`${name}-${pathIndex + 1}`}
              // />
            );
          });
        })}
      </div>
    );
  };

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
          className={`text-left flex flex-col justify-center items-center border-t border-black py-4 md:py-8 lg:py-16 ${rokkitt.className}`}
        >
          <div className="lg:mx-10 lg:mt-16">
            {renderSidebar()}
            {renderProjects()}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
