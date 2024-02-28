'use client';

import { useState } from "react";
import VolunteeringContainer from "../volunteeringContainer";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "../Backdrop/Notification";
import { useInView } from 'react-intersection-observer';


const VolunteeringSection = ({colors} : {colors: string}) => {
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
    'ניהול פרויקט': 'bg-orange',
    'ניהול מערכות מידע': 'bg-neon',
    'עיצוב חווית משתמש': 'bg-darkGray',
    'אינפוגרפיקה': 'bg-purple',
    'ניהול מוצר': 'bg-orange',
    'ניתוח נתונים': 'bg-purple',
    'קופירייטינג': 'bg-darkGray',
    'עיצוב קמפיינים': 'bg-orange',
    'פיתוח תוכנה': 'bg-neon',
    'פיתוח ל - WEB': 'bg-neon'
  };

  type FieldPosition = {
    top: string;
    left: string;
  };

  type Positions = {
    [key: string]: FieldPosition;
  };

  const positions: Positions = {
    'עיצוב גרפי': { top: '80%', left: '11.5%' },
    'ניהול פרויקט': { top: '100%', left: '20%' },
    'ניהול מערכות מידע': { top: '84%', left: '24.1%' },
    'עיצוב חווית משתמש': { top: '75%', left: '33.7%' },
    'אינפוגרפיקה': { top: '28%', left: '36.4%' },
    'ניהול מוצר': { top: '100%', left: '40.7%' },
    'ניתוח נתונים': { top: '85%', left: '53%' },
    'קופירייטינג': { top: '61.5%', left: '58%' },
    'עיצוב קמפיינים': { top: '81%', left: '68%' },
    'פיתוח תוכנה': { top: '100%', left: '63.5%' },
    'פיתוח ל - WEB': { top: '64.8%', left: '45%' },
  };


  type fieldRotations = { [key: string]: number };

  const rotations: fieldRotations = {
    'עיצוב גרפי': -27,
    'ניהול פרויקט': 0,
    'ניהול מערכות מידע': 30,
    'עיצוב חווית משתמש': 10,
    'אינפוגרפיקה': -33,
    'ניהול מוצר': 0,
    'ניתוח נתונים': -20,
    'קופירייטינג': 5.5,
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
    <section className={`flex flex-col items-start justify-around h-[calc(100vh-88px)] overflow-x-hidden transition snap-center ${colors}`}>
      <div dir={"rtl"} className="flex items-center justify-center space-x-20">
        <div className="inline-block pl-20 text-8xl text-bold font-primary">
          # תחומי התנדבות
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xl">
            רואים את עצמכם באחד מהתחומים
          </span>
          <span className="text-xl">
            בתגיות למטה? לחצו עליה כדי לראות
          </span>
          <span className="text-xl">
            איפה צריכים אתכם:
          </span>
        </div>
      </div>
      <div ref={ref} className="relative flex flex-wrap items-center w-full m-0 h-56">
        {volunteerFields.map((field, index) => {
          const x = Math.random() * 50 - 25;

          const position = positions[field];
          // Set a fixed width for each element
          const width = 250;

          return (
            <motion.div
              className="absolute"
              style={{ top: position.top, left: position.left, width }}
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
