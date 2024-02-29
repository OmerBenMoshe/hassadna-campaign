"use client";

import Link from "next/link";
import Image from "next/image";



const lightColors = 'bg-white text-darkGray';
const lightLogo = '/images/light_colors_logo.svg';
const darkLogo = '/images/dark_colors_logo.svg';



export default function Navbar({ colors }: { colors: string }) {
  const linkClasses = `hover:underline ${colors} transition`;

  //@ts-ignore
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 z-10 flex items-center justify-between pt-1 text-l transition ${colors}`}>
      <Link href="/join-us">
        <button
          className={
            "m-0 pl-4 pr-4 pt-1 pb-1 rounded-full text-l text-bold p-2 bg-orange shadow-sharp border-none"
          }
        >
          <span dir="rtl" className="text-white">הצטרפו אלינו! </span>
        </button>
      </Link>
      <div className="flex items-center space-x-5">
        <Link href="/" className={linkClasses}>
          עובדים איתנו
        </Link>
        <Link href="/about" className={linkClasses}>
          הפרויקטים שלנו
        </Link>
        <Link href="/" onClick={(e) => scrollToSection(e, 'whoSection')} className={linkClasses}>
          מי אנחנו
        </Link>

        <Image
          src={colors === lightColors ? lightLogo : darkLogo}
          alt="Logo"
          width={228}
          height={36}
        />
      </div>
    </nav>
  );
}
