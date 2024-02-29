'use client';

import { useState } from "react";
import VolunteeringContainer from "../volunteeringContainer";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "../Backdrop/Notification";
import { useInView } from 'react-intersection-observer';



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

  type NeededProjectsType = { [key: string]: string[] };

  const neededProjects: NeededProjectsType = {
    'עיצוב גרפי': ['פרוייקט 1', 'פרוייקט 2'],
    'ניהול פרויקט': ['פרוייקט 3', 'פרוייקט 4'],
    'ניהול מערכות מידע': ['פרוייקט 5', 'פרוייקט 6'],
    'עיצוב חווית משתמש': ['פרוייקט 7', 'פרוייקט 8'],
    'אינפוגרפיקה': ['פרוייקט 9', 'פרוייקט 10'],
    'ניהול מוצר': ['פרוייקט 11', 'פרוייקט 12'],
    'ניתוח נתונים': ['פרוייקט 13', 'פרוייקט 14'],
    'קופירייטינג': ['פרוייקט 15', 'פרוייקט 16'],
    'עיצוב קמפיינים': ['פרוייקט 17', 'פרוייקט 18'],
    'פיתוח תוכנה': ['פרוייקט 19', 'פרוייקט 20'],
    'פיתוח ל - WEB': ['פרוייקט 21', 'פרוייקט 22']
  };

  type fieldColorType = { [key: string]: string };

  const fieldColor: fieldColorType = {
    'עיצוב גרפי': 'bg-darkGray',
    'ניהול פרויקט': 'bg-orange text-black',
    'ניהול מערכות מידע': 'bg-neon text-black',
    'עיצוב חווית משתמש': 'bg-darkGray',
    'אינפוגרפיקה': 'bg-purple',
    'ניהול מוצר': 'bg-orange text-black',
    'ניתוח נתונים': 'bg-purple',
    'קופירייטינג': 'bg-darkGray',
    'עיצוב קמפיינים': 'bg-orange text-black',
    'פיתוח תוכנה': 'bg-neon text-black',
    'פיתוח ל - WEB': 'bg-neon text-black'
  };

  type FieldPosition = {
    top: string;
    left: string;
  };

  type Positions = {
    [key: string]: FieldPosition;
  };

  const positions: Positions = {
    'עיצוב גרפי': { top: '47.5%', left: '14.3%' },
    'ניהול פרויקט': { top: '91%', left: '15%' },
    'ניהול מערכות מידע': { top: '74%', left: '23%' },
    'עיצוב חווית משתמש': { top: '57.5%', left: '33.7%' },
    'אינפוגרפיקה': { top: '22.5%', left: '34.9%' },
    'ניהול מוצר': { top: '91%', left: '45%' },
    'ניתוח נתונים': { top: '78%', left: '58%' },
    'קופירייטינג': { top: '34.5%', left: '65%' },
    'עיצוב קמפיינים': { top: '62%', left: '73%' },
    'פיתוח תוכנה': { top: '91%', left: '70%' },
    'פיתוח ל - WEB': { top: '46%', left: '48%' },
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
    <section className={`flex flex-col items-start justify-around h-[calc(100vh-88px)] overflow-x-hidden overflow-y-hidden transition snap-center ${colors}`}>
      <div dir={"rtl"} className="flex items-center justify-center space-x-20">
        <div className="inline-block pl-20 text-8xl text-bold font-primary whitespace-nowrap">
          &lt; תחומי התנדבות&gt;
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-l">
            הסנדא לידע ציבורי נעזרת במתנדבות ומתנדבים מתחומים רבים על מנת לקדם את מטרת המיזם,<br/>ונותנת להם כלים וניסיון שיעזרו להם.ן בעולם האמיתי!
          </span>
          <span className="text-xl">
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
      <hr className="w-full border-t-2 border-black" />
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
            projects={neededProjects[activeField as string]}
            volunteerField={activeField as string} />}
      </AnimatePresence>
    </section>
  );
};

export default VolunteeringSection;
