"use client";

import OrangeArrowSVG from "../svg/orangeArrow";

export default function WhoWeAreSection({colors}: {colors: string}) {
  return (
    <section className={`flex justify-around ${colors} h-[calc(100vh-88px)] transition`}>
      <div
        dir={"rtl"}
        className="flex flex-col items-start justify-center space-t-20"
      >
        <div className="flex">
            <div className="text-8xl text-bold font-primary flex">
            היי!
            <span className="pt-3 px-5">
                <OrangeArrowSVG/>
            </span>
            אנחנו  
            </div>
            <div className="text-l font-secondary w-[150px] h-[80px] pt-3 pr-3">
                עמותה שפועלת 
                כחממה טכנולוגית 
                למיזמי קוד פתוח
            </div>
        </div>
        <div className="text-8xl text-bold font-primary">
            <span className="text-purple">
            &lt;הסדנא לידע ציבורי&gt;
            </span>
            <br />
            ואנחנו אוהבים = 
            <span className="text-orange pr-3">
                DATA
            </span>
            ;
        </div>
      </div>
    </section>
  );
}
