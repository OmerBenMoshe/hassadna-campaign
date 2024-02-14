"use client";

import PendulumSVG from "../svg/pendulum";

export default function WhySection() {
  return (
    <section
      dir={"rtl"}
      className="flex flex-col items-start h-full px-10 py-20 space-y-20"
    >
      <div className="text-8xl text-bold">
        // למה אנחנו <br />
        עושים את זה?
      </div>
      <p className="text-xl">
       לכלים שלנו יש&nbsp;
        <span dir={'rtl'} className="underline decoration-orange decoration-4">אימפקט אמיתי!</span>
        <br />
        הם מאפשרים שקיפות שלטונית, מעורבות אזרחית
        <br />
        ושיח ציבורי מבוסס נתונים.
        <br />
      </p>
      <button className="p-2 px-8 text-3xl border-none rounded-full text-bold bg-orange">
        לא מאמינים? הנה כמה דוגמאות &gt;&gt;&gt;
      </button>
      

      <PendulumSVG className={'absolute top-0 left-48'} />
    </section>
  );
}
