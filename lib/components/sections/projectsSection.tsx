"use client";

import WhiteBracketSVG from "@/lib/components/svg/whiteBracket"; 
import DatabusSVG from "../svg/databus";
import LawsSVG from "../svg/laws";
import OpenPensionSVG from "../svg/openPension";
import OpenKnessetSVG from "../svg/openKnesset";
import DataCitySVG from "../svg/dataCity";
import BudgetSVG from "../svg/budget";
import Link from "next/link";


export default function ProjectsSection({colors}: {colors: string}) {

  return (
    <section 
      className={`relative flex flex-col ${colors} h-[calc(375vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="sticky top-10 z-1 flex items-center text-7xl text-bold font-primary mx-10 my-12">
          <span className="transform scale-x-[-1] pt-1 pr-5">
            <WhiteBracketSVG/>
          </span>
          הפרויקטים שלנו
          <span className="transform pt-1 pr-5">
            <WhiteBracketSVG/>
          </span>
      </div>

      <div className="flex z-2 absolute w-full mt-20">
        <div 
          dir={"rtl"}
          className="flex flex-col items-center text-lg gap-2 m-10 z-5 w-1/2 gap-56 pt-24">

          <div className="flex flex-col bg-white rounded-40 w-[330px] h-[380px] text-center justify-center p-12">
            <div className="flex w-[150px] h-[50px] items-center justify-center mr-10 mt-12">
              <DatabusSVG/>
            </div>
            <a 
              href="https://open-bus-map-search.hasadna.org.il/dashboard" 
              target="_blank"
              className="font-bold text-darkGray hover:underline hover:decoration-orange decoration-2">
              <br/>
              דאטאבוס
            </a>
            <p className="flex font-normal text-darkGray leading-none">
            <br/>
            איגוד והצגת נתוני איכות על מגוון קווי אוטובוסים וחברות תחבורה ציבורית בארץ.
            </p>
            <Link href="/join-us">
              <button className="font-bold bg-purple rounded-full inline-block mx-8 py-4 mb-12">
                הצטרפו לפרויקט
              </button>
            </Link>
          </div>

          <div className="flex flex-col bg-white rounded-40 w-[330px] h-[380px] text-center justify-center p-12">
            <div className="flex w-[120px] h-[50px] items-center justify-center mr-14 mt-12">
              <OpenPensionSVG/>
            </div>
            <a 
              href="https://www.openpension.org.il/" 
              target="_blank"
              className="font-bold text-darkGray hover:underline hover:decoration-orange decoration-2">
              <br/>
              פנסיה פתוחה
            </a>
            <p className="flex font-normal text-darkGray leading-none ">
            <br/>
            אתר המציג פירוט על ניהול אפיקי השקעות של קופות הפנסיה והגמל, כולל מידע והשוואה של הקצאת נכסים של קופות וניתוח הנתונים על ציר זמן.
            </p>
            <Link href="/join-us">
              <button className="font-bold bg-orange rounded-full inline-block mx-8 py-4 mb-12">
                הצטרפו לפרויקט
              </button>
            </Link>
          </div>

          <div className="flex flex-col bg-white rounded-40 w-[330px] h-[380px] text-center justify-center p-12">
            <div className="flex w-[75px] h-[75px] items-center justify-center mr-20 mt-12 -mb-4">
              <LawsSVG/>
            </div>
            <a 
              href="https://he.wikisource.org/wiki/%D7%95%D7%99%D7%A7%D7%99%D7%98%D7%A7%D7%A1%D7%98:%D7%A1%D7%A4%D7%A8_%D7%94%D7%97%D7%95%D7%A7%D7%99%D7%9D_%D7%94%D7%A4%D7%AA%D7%95%D7%97" 
              target="_blank"
              className="font-bold text-darkGray hover:underline hover:decoration-orange decoration-2">
              <br/>
              ספר החוקים הפתוח
            </a>
            <p className="flex font-normal text-darkGray leading-none ">
            <br/>
            מיזם הפועל באתר האינטרנט ׳ויקיטקסט׳ שנועד לרכז ולהנגיש את חוקי מדינת ישראל בנוסח עדכני ופשוט להבנה.
            </p>
            <Link href="/join-us">
              <button className="font-bold bg-neon text-darkGray rounded-full inline-block mx-8 py-4 mb-12">
                הצטרפו לפרויקט
              </button>
            </Link>
          </div>

        </div>

        <div 
          dir={"rtl"}
          className="flex flex-col items-center text-lg gap-2 m-10 z-2 w-1/2 gap-56">

          <div className="flex flex-col bg-white rounded-40 w-[330px] h-[380px] text-center justify-center p-12">
            <div className="flex w-[120px] h-[40px] items-center justify-center mr-14 mt-12">
              <OpenKnessetSVG/>
            </div>
            <a 
              href="https://oknesset.org/" 
              target="_blank"
              className="font-bold text-darkGray hover:underline hover:decoration-orange decoration-2">
              <br/>
              כנסת פתוחה
            </a>
            <p className="flex font-normal text-darkGray leading-none">
            <br/>
            שיקוף הפעולות בכנסת, כולל עדכוני פרוטוקולים של ועדות ומליאות, הצעות חוק יזומות ומידע על חברי כנסת וסיעות שונות.
            </p>
            <Link href="/join-us">
              <button className="font-bold bg-orange rounded-full inline-block mx-8 py-4 mb-12">
                הצטרפו לפרויקט
              </button>
            </Link>
          </div>

          <div className="flex flex-col bg-white rounded-40 w-[330px] h-[380px] text-center justify-center p-12">
            <div className="flex w-[120px] h-[50px] items-center justify-center mr-14 mt-12">
              <DataCitySVG/>
            </div>
            <a 
              href="https://data-city.my.canva.site/" 
              target="_blank"
              className="font-bold text-darkGray hover:underline hover:decoration-orange decoration-2">
              <br/>
              דאטא סיטי
            </a>
            <p className="flex font-normal text-darkGray leading-none ">
            <br/>
            הנגשת מידע ונתונים ממשלתיים לרשויות מקומיות למטרת יצירת פרויקטים עירוניים וקידום יזמות דיגיטלית במרחב העירוני.
            </p>
            <Link href="/join-us">
              <button className="font-bold bg-neon text-darkGray rounded-full inline-block mx-8 py-4 mb-12">
                הצטרפו לפרויקט
              </button>
            </Link>
          </div>

          <div className="flex flex-col bg-white rounded-40 w-[330px] h-[380px] text-center justify-center p-12">
            <div className="flex w-[125px] h-[125px] items-center justify-center mr-14 mt-10 -mb-8">
              <BudgetSVG/>
            </div>
            <a 
              href="https://next.obudget.org/" 
              target="_blank"
              className="font-bold text-darkGray hover:underline hover:decoration-orange decoration-2">
              <br/>
              מפתח תקציב
            </a>
            <p className="flex font-normal text-darkGray leading-none ">
            <br/>
            אתר שנועד להנגיש את נתוני תקציב המדינה, בדגש על התחלקות התקציב בין משרדים, השתנות התקציב השנתי והוצאות כלכליות במהלך השנה.
            </p>
            <Link href="/join-us">
              <button className="font-bold bg-purple rounded-full inline-block mx-8 py-4 mb-12">
                הצטרפו לפרויקט
              </button>
            </Link>
          </div>

        </div>
        
      </div>

      
      
    </section>
  );
}
