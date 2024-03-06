'use client';

import { useState } from "react";
import VolunteeringContainer from "../volunteeringContainer";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "../Backdrop/Notification";
import { useInView } from 'react-intersection-observer';
import BlackBracketSVG from "../svg/blackBracket";



const VolunteeringSection = ({ colors }: { colors: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeField, setActiveField] = useState('' as String);

  const close = () => setModalOpen(false);
  const open = (field: String) => {
    setActiveField(field);
    setModalOpen(true);
  }
  const volunteerFields = ['עיצוב גרפי', 'ניהול פרויקט',
    'ניהול מערכות מידע', 'עיצוב חווית משתמש', 'אינפוגרפיקה',
    'ניהול מוצר', 'ניתוח נתונים', 'קופירייטינג',
    'עיצוב קמפיינים', 'פיתוח תוכנה', 'פיתוח ל - WEB'];

  type NeededProjectsType = { [key: string]: string };

  const neededProjects: NeededProjectsType = {
    'עיצוב גרפי': 'ספר החוקים הפתוח',
    'ניהול פרויקט': 'כנסת פתוחה',
    'ניהול מערכות מידע': 'פנסיה פתוחה',
    'עיצוב חווית משתמש': 'מפתח תקציב',
    'אינפוגרפיקה': 'פנסיה פתוחה',
    'ניהול מוצר': 'דאטאבוס',
    'ניתוח נתונים': 'כנסת פתוחה',
    'קופירייטינג': 'ספר החוקים הפתוח',
    'עיצוב קמפיינים': 'פנסיה פתוחה',
    'פיתוח תוכנה': 'כנסת פתוחה',
    'פיתוח ל - WEB': 'דאטא סיטי'
  };

  type fieldColorType = { [key: string]: string };

  const fieldColor: fieldColorType = {
    'עיצוב גרפי': 'bg-darkGray',
    'ניהול פרויקט': 'bg-orange text-darkGray',
    'ניהול מערכות מידע': 'bg-neon text-darkGray',
    'עיצוב חווית משתמש': 'bg-darkGray',
    'אינפוגרפיקה': 'bg-purple',
    'ניהול מוצר': 'bg-orange text-darkGray',
    'ניתוח נתונים': 'bg-purple',
    'קופירייטינג': 'bg-darkGray',
    'עיצוב קמפיינים': 'bg-orange text-darkGray',
    'פיתוח תוכנה': 'bg-neon text-darkGray',
    'פיתוח ל - WEB': 'bg-neon text-darkGray'
  };

  type FieldPosition = {
    top: string;
    left: string;
  };

  type Positions = {
    [key: string]: FieldPosition;
  };

  const positions: Positions = {
    'עיצוב גרפי': { top: '46.5%', left: '14.3%' },
    'ניהול פרויקט': { top: '90%', left: '15%' },
    'ניהול מערכות מידע': { top: '73%', left: '23%' },
    'עיצוב חווית משתמש': { top: '56.5%', left: '33.7%' },
    'אינפוגרפיקה': { top: '21.5%', left: '34.9%' },
    'ניהול מוצר': { top: '90%', left: '45%' },
    'ניתוח נתונים': { top: '77%', left: '58%' },
    'קופירייטינג': { top: '33.5%', left: '65%' },
    'עיצוב קמפיינים': { top: '61%', left: '73%' },
    'פיתוח תוכנה': { top: '90%', left: '70%' },
    'פיתוח ל - WEB': { top: '45%', left: '48%' },
  };


  type fieldRotations = { [key: string]: number };

  const rotations: fieldRotations = {
    'עיצוב גרפי': -45,
    'ניהול פרויקט': 0,
    'ניהול מערכות מידע': 30,
    'עיצוב חווית משתמש': 7,
    'אינפוגרפיקה': -5,
    'ניהול מוצר': 0,
    'ניתוח נתונים': -33,
    'קופירייטינג': -5,
    'עיצוב קמפיינים': 0,
    'פיתוח תוכנה': 0,
    'פיתוח ל - WEB': 27
  };

  const containerVariants = (x: number, rotate: number) => ({
    hidden: { opacity: 0, y: '-100vh', x: `${x}vw`, rotate },
    visible: { opacity: 1, y: 0, x: 0, rotate, transition: { type: 'spring', delay: 0.5, duration: 2.5 } },
  });

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
  });


  return (
    <section className={`flex flex-col m-0 p-0 items-between justify-top h-[calc(100vh-88px)] overflow-x-hidden overflow-y-hidden transition snap-center ${colors}`}>
      <div dir={"rtl"} className="flex items-start justify-around mt-16 mb-[15vh] -mx-20">

        <div className="flex items-center text-7xl text-bold font-primary whitespace-nowrap">
        <span className="leading-none transform scale-x-[-1] pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
          תחומי התנדבות
          <span className="leading-none transform pt-1 pr-5">
            <BlackBracketSVG/>
          </span>
          
        </div>
        <div className="flex flex-col justify-center pt-3 space-y-4">
          <span className="text-md">
            הסדנא לידע ציבורי נעזרת במתנדבות ומתנדבים <br />מתחומים רבים על מנת לקדם את מטרת המיזם,<br />ונותנת להם כלים וניסיון שיעזרו להם.ן בעולם האמיתי!
          </span>
          <span className="text-md whitespace-nowrap font-bold">
            &lt;&lt;&lt; לחצו על התגיות כדי לגלות איך אפשר לעזור
          </span>
        </div>
      </div>


      <div id="dropping-items" ref={ref} className="relative flex flex-wrap items-center w-[1200px] h-[224px] pb-[height_of_tallest_child] m-0  mx-auto left-0 right-0">        {volunteerFields.map((field, index) => {
        const x = Math.random() * 50 - 25;

        const position = positions[field];
        // Set a fixed width for each element

        return (
          <motion.div
            className="absolute p-0 m-0 "
            style={{ top: position.top, left: position.left }}
            key={index}
            variants={containerVariants(x, rotations[field])}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <VolunteeringContainer
              modalOpen={modalOpen}
              open={open}
              close={close}
              volunteerField={field}
              fieldColor={fieldColor[field]} />
          </motion.div>
        );
      })}
      </div>
      <hr className="w-full border-t-2 border-black mt-11" />
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
          <Notification
            handleClose={close}
            project={neededProjects[activeField as string]}
            volunteerField={activeField as string} />}
      </AnimatePresence>
    </section>
  );
};

export default VolunteeringSection;
