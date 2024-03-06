"use client";

import BlackBracketSVG from "@/lib/components/svg/blackBracket"; 

export default function FiguresSection({colors}: {colors: string}) {

  return (
    <section className={`flex flex-col ${colors} justify-center h-[calc(100vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex items-center text-7xl text-bold font-primary mx-10">
          <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
          הסדנא בנתונים
          <span className="leading-none transform pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
      </div>

      <div 
        dir={"rtl"}
        className="flex items-center font-primary text-8xl gap-2 m-10">
        <div className="flex flex-col bg-neon rounded-3xl w-[300px] h-[350px] text-center justify-center p-12 transform transition-transform duration-100 hover:rotate-3">
          2011
          <p className="flex font-secondary text-lg">
            הסדנא נוסדה והחלה לפעול
          </p>
        </div>
        <div className="flex flex-col bg-orange rounded-3xl text-white w-[300px] h-[350px] text-center justify-center p-12 transform transition-transform duration-100 hover:-rotate-3">
          8
          <p className="flex font-secondary text-lg">
            פרויקטים פעילים כעת נכון לפברואר 2024
          </p>
        </div>
        <div className="flex flex-col bg-darkGray rounded-3xl text-white w-[300px] h-[350px] text-center justify-center p-12 transform transition-transform duration-100 hover:rotate-3">
          17
          <p className="flex font-secondary text-lg">
            סך הכל פרויקטים ייחודיים עלינו עבדנו מתחילת דרכנו
          </p>
        </div>
        <div className="flex flex-col bg-purple rounded-3xl text-white w-[300px] h-[350px] text-center justify-center p-12 transform transition-transform duration-100 hover:-rotate-3">
          20+
          <p className="flex font-secondary text-lg">
            מתנדבים ומתנדבות פועלים.ות על הפרויקטים בסדנא
          </p>
        </div>
      </div>

    
    </section>
  );
}
