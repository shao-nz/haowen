import Link from "next/link";
import { Rokkitt } from "next/font/google";

const rokkitt = Rokkitt({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={`self-end py-4 ${rokkitt.className}`}>
      Made possible by{" "}
      <Link
        className="text-purple-700"
        href="https://www.linkedin.com/in/eddyshao/"
        data-event="Footer: Clicked Eddy Shao"
      >
        Eddy Shao
      </Link>
    </footer>
  );
}
