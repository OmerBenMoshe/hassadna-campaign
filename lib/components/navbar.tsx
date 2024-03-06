"use client";

import Link from "next/link";
import Image from "next/image";



const lightColors = 'bg-white text-darkGray';
const lightLogo = '/images/light_colors_logo.svg';
const darkLogo = '/images/dark_colors_logo.svg';



export default function Navbar({ colors }: { colors: string }) {
  const linkClasses = `${colors} transition`;

  //@ts-ignore
  const scrollToSection = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`sticky top-0 z-10 flex items-center justify-between py-5 text-l transition ${colors}`}>
      <Link href="/join-us">
        <button
          className={
            "m-0 ml-10 pl-4 pr-4 pt-1 pb-1 rounded-full text-l text-bold p-2 bg-orange hover:bg-neon hover:text-darkGray transition shadow-sharp border-none"
          }
        >
          <span dir="rtl">הצטרפו אלינו! </span>
        </button>
      </Link>
      <div className="flex items-center space-x-5 ">
        <Link 
          href="/" 
          onClick={(e) => scrollToSection(e, 'partnersSection')} 
          className={`${linkClasses} hover:underline hover:decoration-orange decoration-2`}>
          עובדים איתנו
        </Link>
        <Link 
          href="/" 
          onClick={(e) => scrollToSection(e, 'projectSection')} 
          className={`${linkClasses} hover:underline hover:decoration-orange decoration-2`}>
          הפרויקטים שלנו
        </Link>
        <Link  
          href="/" 
          onClick={(e) => scrollToSection(e, 'whoSection')} 
          className={`${linkClasses} hover:underline hover:decoration-orange decoration-2`}>
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
