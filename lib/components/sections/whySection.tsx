"use client";

import PendulumSVG from "../svg/pendulum";

export default function WhySection({colors}: {colors: string}) {
  return (
    <section className={`flex justify-around ${colors} h-[calc(100vh-88px)] transition`}>
      <PendulumSVG className={"h-screen-sm pb-10"} />

      <div
        dir={"rtl"}
        className="flex flex-col items-start justify-center space-y-20"
      >
        <div className="text-8xl text-bold font-primary">
        &#47;&#47; למה אנחנו <br />
          עושים את זה?
        </div>
        <p className="text-xl">
          לכלים שלנו יש&nbsp;
          <span
            dir={"rtl"}
            className="underline decoration-orange decoration-4"
          >
            אימפקט אמיתי!
          </span>
          <br />
          הם מאפשרים שקיפות שלטונית, מעורבות אזרחית
          <br />
          ושיח ציבורי מבוסס נתונים.
          <br />
        </p>
        <button className="p-2 px-8 text-3xl border-none rounded-full text-bold bg-orange font-primary">
          לא מאמינים? הנה כמה דוגמאות &gt;&gt;&gt;
        </button>
      </div>
    </section>
  );
}
