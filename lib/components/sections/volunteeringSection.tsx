'use client';

import { useState } from "react";
import VolunteeringContainer from "../volunteeringContainer";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "../Backdrop/Notification";
import { useInView } from 'react-intersection-observer';


const VolunteeringSection = () => {
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
    'עיצוב גרפי': 'darkGray',
    'ניהול פרויקט': 'orange',
    'ניהול מערכות מידע': 'neon',
    'עיצוב חווית משתמש': 'darkGray',
    'אינפוגרפיקה': 'blue',
    'ניהול מוצר': 'orange',
    'ניתוח נתונים': 'blue',
    'קופירייטינג': 'darkGray',
    'עיצוב קמפיינים': 'orange',
    'פיתוח תוכנה': 'neon',
    'פיתוח ל - WEB': 'neon'
  };

  const containerVariants = (x: number, rotate: number) => ({
    hidden: { opacity: 0, y: '-100vh', x: `${x}vw`, rotate },
    visible: { opacity: 1, y: 0, x: 0, rotate: 0, transition: { type: 'spring', delay: 0.5, duration: 2.5 } },
  });

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
  });


  return (
    <section className="flex flex-col items-start justify-around bg-white h-[calc(100vh-88px)]">
      <div dir={"rtl"} className="flex items-center justify-center space-x-20">
        <div className="text-8xl text-bold font-primary inline-block pl-20">
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
      <div>
        <div ref={ref} className="flex flex-wrap justify-center">
          {volunteerFields.map((field, index) => {
            const x = Math.random() * 50 - 25; // Random number between -25 and 25
            const rotate = Math.random() * 30 - 15; // Random number between -15 and 15

            return (
              <motion.div
                key={index}
                variants={containerVariants(x, rotate)}
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

          {modalOpen && // @ts-ignore
            <Notification modalOpen={modalOpen}
              handleClose={close}
              projects={neededProjects[activeField as string]}
              volunteerField={activeField as string} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VolunteeringSection;
