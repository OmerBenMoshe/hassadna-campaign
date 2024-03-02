"use client";

import WhiteBracketSVG from "@/lib/components/svg/blackBracket"; 

export default function ProjectsBackground({colors}: {colors: string}) {

  return (
    <div
    dir={"rtl"}
    className="flex items-center ${colors} text-7xl text-bold font-primary mx-10 ">
        <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <WhiteBracketSVG/>
        </span>
        הפרויקטים שלנו
        <span className="leading-none transform pt-1 pr-5">
            <WhiteBracketSVG/>
        </span>
    </div>
    
  );
}
