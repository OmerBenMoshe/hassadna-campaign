"use client";

import ClutteredDataSVG from "../svg/clutteredData";
import WhiteArrowSVG from "../svg/whiteArrow";
import OrganisedDataSVG from "../svg/organisedData";
import WhiteBracketSVG from "../svg/whiteBracket";

export default function WhatSection({colors}: {colors: string}) {
  return (
    <section className={`flex flex-col ${colors} h-[calc(100vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex items-center mr-10 text-7xl text-bold font-primary">
          <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <WhiteBracketSVG/>
          </span>
          מה אנחנו עושים?
          <span className="leading-none transform pt-1 pr-5">
            <WhiteBracketSVG/>
          </span>
      </div>

      <div 
        dir={"rtl"}
        className="flex justify-around py-10 mx-10" 
        >
          <div className="flex flex-col items-center"> 
            <p className="text-lg">
              בגדול, אנחנו מקבלים נתונים ממוסדות ציבוריים...
            </p> 
            <div className="flex my-7">
              <ClutteredDataSVG width={'20vw'} height={'20vw'}/>
            </div>  
          </div>
          <div className="flex items-center mb-10">
            <WhiteArrowSVG/>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex my-2">
              <OrganisedDataSVG width={'20vw'} height={'20vw'}/>
            </div>
            <p className="text-lg">
              ומפתחים כלים דיגיטליים שינגישו אותם לציבור
              <br/>
              הרחב בצורה פשוטה לעיכול, ונעימה לעין!
            </p>   
          </div>
        </div>
    </section>
  );
}
