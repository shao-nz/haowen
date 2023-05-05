import Image from "next/image";
import Link from "next/link";
import { Rokkitt } from "@next/font/google";

const rokkitt = Rokkitt({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
  return (
    <nav className="pt-4 pb-1 flex flex-row justify-between items-end">
      <Link href="/" className={`text-3xl align-bottom ${rokkitt.className}`}>
        HW.
      </Link>
      <Link href="https://www.instagram.com/hao_portfolio/" className="pb-1">
        <Image
          src="/instagram.png"
          alt="Instagram logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-7"
        />
      </Link>
    </nav>
  );
}
