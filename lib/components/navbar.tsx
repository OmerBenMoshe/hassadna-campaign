"use client";

import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";
import Image from "next/image";
import logo from "../assets/logo.svg";

const linkClasses = "text-darkGray hover:text-darkGray-300 hover:underline";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between p-5 text-lg bg-base-100">
      <button className={"m-0 rounded-full text-2xl text-bold p-2 bg-orange shadow-sharp"}>
        <span className="text-white">CLICK HERE TO </span>
        <span className="text-darkGray">JOIN US!*</span>{" "}
      </button>
      <div className="flex items-center space-x-20">
        <Link href="/" className={linkClasses}>
          עובדים איתנו
        </Link>
        <Link href="/about" className={linkClasses}>
          הפרויקטים שלנו
        </Link>
        <Link href="/about" className={linkClasses}>
          מי אנחנו
        </Link>
        <Image src={logo} alt="Logo" width={288} height={36} />
      </div>
    </nav>
  );
}
