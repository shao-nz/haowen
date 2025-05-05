import "../styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        defer
        src="http://analytics.eddyshao.com/script.js"
        data-website-id="fd80e80e-bf20-4b4a-9ef9-9a7573ec8f62"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
