"use client";

import WhiteBracketSVG from "../svg/whiteBracket";
import Image from "next/image";

export default function WhySection({colors}: {colors: string}) {
  return (
    <section className={`flex justify-end ${colors} h-[calc(100vh-88px)] transition snap-center space-x-10`}>
      <div
        dir={"rtl"}
        className="flex flex-col items-start justify-center"
      >
        <div className="flex items-center text-7xl mr-10 text-bold font-primary mb-20">
          <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <WhiteBracketSVG/>
          </span>
          למה אנחנו עושים את זה?
          <span className="leading-none transform pt-1 pr-5">
            <WhiteBracketSVG/>
          </span>
        </div>

        <div className="flex justify-between">
          <div className="w-2/3">
            <p className="text-lg mr-10">
              המטרה שלנו היא ליצור אימפקט בעולם האמיתי. <br/>
              לאפשר שקיפות שלטונית, מעורבות אזרחית <br/>
              ושיח ציבורי מבוסס נתונים. &nbsp;
              <span
                dir={"rtl"}
                className="text-neon"
              >
                וזה עובד! <br/>
                <br/>
              </span>
            </p> 
            <p className="px-10 text-lg border-none text-bold">
              לא מאמינים? הנה כמה דוגמאות &nbsp; &gt;&gt;&gt;
            </p>
          </div>

          {/* <div className="mr-20 pr-20 relative"> */}
          <div className="w-1/3">
            <Image 
              src="/gif/pendulum.gif" 
              alt="pendulum" 
              width={800} 
              height={1000} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}