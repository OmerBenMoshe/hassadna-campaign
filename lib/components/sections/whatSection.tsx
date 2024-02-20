"use client";

import ClutteredDataSVG from "../svg/clutteredData";
import WhiteArrowSVG from "../svg/whiteArrow";
import OrganisedDataSVG from "../svg/organisedData";

export default function WhatSection({colors}: {colors: string}) {
  return (
    // <section className={`flex flex-col ${colors} h-[calc(100vh-88px)] transition justify-end`}></section>
    <section className={`flex flex-col ${colors} transition justify-end`}>
      <div
        dir={"rtl"}
        className="flex text-8xl text-bold font-primary items-center mr-20">
        -- מה אנחנו עושים?
      </div>

      <div 
        dir={"rtl"}
        className="flex justify-around mx-20 px-20 py-10" 
        >
          <div className="flex flex-col items-center"> 
            <p className="text-lg">
              בגדול, אנחנו מקבלים נתונים ממוסדות ציבוריים...
            </p> 
            <div className="flex my-5">
              <ClutteredDataSVG/>
            </div>  
          </div>
          <div className="flex items-center mb-20">
            <WhiteArrowSVG/>
          </div>
          <div className="flex flex-col items-center my-6">
            <div className="flex my-5">
              <OrganisedDataSVG/>
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
