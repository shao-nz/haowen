import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Loader } from "@googlemaps/js-api-loader";
import { Rokkitt } from "@next/font/google";

const rokkitt = Rokkitt({
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  const googlemap = useRef(null);
  const wilkinsonCoords = { lat: -33.8887733, lng: 151.192203 };
  const marker = "images/marker.svg";

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
      version: "weekly",
    });

    let map: google.maps.Map;
    loader.load().then(() => {
      const google = window.google!;
      map = new google.maps.Map(googlemap.current, {
        mapId: "14003129647bca5c",
        center: wilkinsonCoords,
        zoom: 16,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      });

      new google.maps.Marker({
        position: wilkinsonCoords,
        map,
        title: "Wilkinson Building",
        icon: marker,
      });
    });
  });

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
          className={`h-[90vh] text-left flex flex-col md:flex-row justify-center items-center border-t border-black py-16 ${rokkitt.className}`}
        >
          <div className="w-1/2 font-neutral-face flex flex-col gap-2 mb-10">
            <h3 className="text-2xl font-bold">Contact Me</h3>
            <br />
            <p>Phone: (+61) 405 826 000</p>
            <p>Email: hao.wen.architecture@gmail.com</p>
            <p>
              <u>
                <Link href="https://www.linkedin.com/in/haowenarchitecture/">
                  LinkedIn
                </Link>
              </u>
            </p>
            <p>
              <u>
                <Link href="https://www.instagram.com/hao_portfolio/">
                  Instagram
                </Link>
              </u>
            </p>
            <p>
              <u>
                <Link href="https://issuu.com/haowenarchitecture">Issuu</Link>
              </u>
            </p>
          </div>
          <div className="w-3/4 h-5/6 self-center" ref={googlemap} />
        </main>
        <Footer />
      </div>
    </>
  );
}
