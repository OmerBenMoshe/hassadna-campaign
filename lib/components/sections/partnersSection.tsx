"use client";

import BlackBracketSVG from "@/lib/components/svg/blackBracket"; 
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PartnershipInfo from "../Backdrop/partnershipInfo";

const yadHanadiv = '/images/yad_hanadiv.svg';
const civilRightsG = '/images/civil_rights_g.svg';
const civilRightsC = '/images/civil_rights_c.svg';
const unG = "/images/un_g.svg";
const unC = "/images/un_c.svg";
const vanLeerG = "/images/van_leer_g.svg";
const vanLeerC = "/images/van_leer_c.svg";
const nifG = "/images/nif_g.svg";
const nifC = "/images/nif_c.svg";
const migdalG = "/images/migdal_g.svg";
const migdalC = "/images/migdal_c.svg";
const matachG = "/images/matach_g.svg";
const matachC = "/images/matach_c.svg";
const googleG = "/images/google_g.svg";
const googleC = "/images/google_c.svg";


export default function PartnersSection({colors}: {colors: string}) {
    const [isCivilRightsHovered, setIsCivilRightsHovered] = useState(false);
    const [isUnHovered, setIsUnHovered] = useState(false);
    const [isVanLeerHovered, setIsVanLeerHovered] = useState(false);
    const [isNifHovered, setIsNifHovered] = useState(false);
    const [isMigdalHovered, setIsMigdalHovered] = useState(false);
    const [isMatachHovered, setIsMatachHovered] = useState(false);
    const [isGoogleHovered, setIsGoogleHovered] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [activeField, setActiveField] = useState('' as String);

    const close = () => setModalOpen(false);
    const open = (field: String) => {
        setActiveField(field);
        setModalOpen(true);
    }
    const PartnersField = ['קרן יד הנדיב', 'האגודה לזכויות האזרח בישראל',
        'המרכז לטכנולוגיה חינוכית (מט"ח)', 'מכון ון ליר', 'הקרן החדשה לישראל',
        'האיחוד האירופי', 'קבוצת מגדל', 'גוגל ישראל'];

    type Description = { [key: string]: string };

    const Partners: Description = {
        'קרן יד הנדיב': '100,000 ש"ח תמיכה כללית',
        'האגודה לזכויות האזרח בישראל': '283,816 לפרויקט ליישום המלצות דו"ח פלמור',
        'המרכז לטכנולוגיה חינוכית (מט"ח)': '42,712 ש"ח, תשלום אחרון לפרויקט החוויה הדמוקר',
        'מכון ון ליר': '211,661 ש"ח להקמת מרכז ידע לאומי בנושא נשים ומגדר',
        'הקרן החדשה לישראל': '104,654 ש"ח ($30,000) כתמיכה כללית',
        'האיחוד האירופי': '487,699 ש"ח לפרויקט "תקציביזם"',
        'קבוצת מגדל': '154,000 ש"ח לפיתוח "המפה החברתית 2.0"',
        'גוגל ישראל': '59,625 ש"ח, מטצינג עבור שעות התנדבות ותרומות לפרויקט פיתוח תשתיות טכנולוגיות, ו-11,140 ש"ח תמיכה כללית',
      };

  return (
    <section className={`flex flex-col ${colors} h-[calc(100vh-88px)] transition snap-center`}>
      <div
        dir={"rtl"}
        className="flex items-center text-7xl text-bold font-primary mx-10 -mt-3">
          <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
          עובדים איתנו
          <span className="leading-none transform pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
      </div>

      <div className="flex flex-col mx-10">
        <div className="flex mx-20 relative justify-between pb-10">
            <Image
                src={yadHanadiv}
                alt="yad hanadiv"
                width={125} //228
                height={75} //36
                onClick={() => open('קרן יד הנדיב')}
                className="cursor-pointer"
            />
            <Image
                src={isCivilRightsHovered ? civilRightsC : civilRightsG}
                alt="civil rights"
                width={350} //228
                height={55} //36
                onMouseEnter={() => setIsCivilRightsHovered(true)}
                onMouseLeave={() => setIsCivilRightsHovered(false)}
                onClick={() => open('האגודה לזכויות האזרח בישראל')}
                className="cursor-pointer"
            />
            <Image
                src={isUnHovered ? unC : unG}
                alt="un"
                width={100} 
                height={100} 
                onMouseEnter={() => setIsUnHovered(true)}
                onMouseLeave={() => setIsUnHovered(false)}
                onClick={() => open('האיחוד האירופי')}
                className="cursor-pointer"
            />
            <Image
                src={isVanLeerHovered ? vanLeerC : vanLeerG}
                alt="van leer"
                width={175} //228
                height={100} //36
                onMouseEnter={() => setIsVanLeerHovered(true)}
                onMouseLeave={() => setIsVanLeerHovered(false)}
                onClick={() => open('מכון ון ליר')}
                className="cursor-pointer"
            />
        </div>
        <div className="flex mx-20 relative justify-between">
            <Image
                src={isNifHovered ? nifC : nifG}
                alt="nif"
                width={250} //228
                height={100} //36
                onMouseEnter={() => setIsNifHovered(true)}
                onMouseLeave={() => setIsNifHovered(false)}
                onClick={() => open('הקרן החדשה לישראל')}
                className="cursor-pointer"
            />
            <Image
                src={isMigdalHovered ? migdalC : migdalG}
                alt="migdal"
                width={70} //228
                height={55} //36
                onMouseEnter={() => setIsMigdalHovered(true)}
                onMouseLeave={() => setIsMigdalHovered(false)}
                onClick={() => open('קבוצת מגדל')}
                className="cursor-pointer"
            />
            <Image
                src={isMatachHovered ? matachC : matachG}
                alt="matach"
                width={150} 
                height={100} 
                onMouseEnter={() => setIsMatachHovered(true)}
                onMouseLeave={() => setIsMatachHovered(false)}
                onClick={() => open('המרכז לטכנולוגיה חינוכית (מט"ח)')}
                className="cursor-pointer"
            />
            <Image
                src={isGoogleHovered ? googleC : googleG}
                alt="google"
                width={175} //228
                height={100} //36
                onMouseEnter={() => setIsGoogleHovered(true)}
                onMouseLeave={() => setIsGoogleHovered(false)}
                onClick={() => open('גוגל ישראל')}
                className="cursor-pointer"
            />
        </div>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >

        {modalOpen &&
          <PartnershipInfo
            handleClose={close}
            partner={Partners[activeField as string]}
            description={activeField as string} />}
      </AnimatePresence>

    </section>
  );
}
