"use client";

import ClutteredDataSVG from "../svg/clutteredData";
import WhiteArrowSVG from "../svg/whiteArrow";
import OrganisedDataSVG from "../svg/organisedData";

export default function WhatWeDoSection({colors}: {colors: string}) {
  return (
    <section className={`flex pl-60 pr-20 ${colors} h-[calc(100vh-88px)] transition`}>
      <div
        dir={"rtl"}
        className="flex flex-col justify-center space-y-10"
      >
        <div className="text-8xl text-bold font-primary items-end">
        -- מה אנחנו עושים?
        </div>
        {/* from here */}
        <div className="flex justify-around items-center space-x-20">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-l">
              בגדול, אנחנו מקבלים נתונים ממוסדות ציבוריים...
            </p> 
            <ClutteredDataSVG/>  
          </div>
          <div className="flex items-center justify-center">
            <WhiteArrowSVG/>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <OrganisedDataSVG/>
            <p className="text-l">
              ומפתחים כלים דיגיטליים שינגישו אותם לציבור הרחב בצורה פשוטה לעיכול, ונעימה לעין!
            </p>   
          </div>
        </div>
      </div>
    </section>
  );
}
