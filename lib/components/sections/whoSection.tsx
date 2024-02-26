"use client";

import OrangeArrowSVG from "../svg/orangeArrow";
import PurpleBracketSVG from "../svg/purpleBracket";

export default function WhoSection({colors}: {colors: string}) {
  return (
    // <section className={`flex justify-around ${colors} h-[calc(100vh-88px)] transition snap-center`}>
    <section className={`flex justify-around ${colors} h-screen transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex flex-col items-start justify-center space-t-20"
      >
        <div className="flex">
            <div className="flex text-8.5xl text-bold font-primary leading-none pl-4">
            היי!
            <span className="px-6 pt-4">
                <OrangeArrowSVG/>
            </span>
            אנחנו  
            </div>
            <div className="text-lg font-secondary font-450 pt-4 pr-10 leading-snug">
                עמותה שפועלת <br/>
                כחממה טכנולוגית <br/>
                למיזמי קוד פתוח
            </div>
        </div>
        <div className="text-8.5xl text-bold font-primary leading-none">
            <div className="flex text-purple leading-none">
              <span className="leading-none transform scale-x-[-1] pt-6 pr-4">
                <PurpleBracketSVG/>
              </span>
            הסדנא לידע ציבורי
            <span className="leading-none pt-6 pr-4">
                <PurpleBracketSVG/>
              </span>
            </div>
            ואנחנו אוהבים = 
            <span className="pr-3 text-orange">
                DATA
            </span>
            ;
        </div>
      </div>
    </section>
  );
}
