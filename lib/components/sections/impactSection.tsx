import ArrowDownLeftSVG from "../svg/arrowDownLeft";
import ArrowDownRightSVG from "../svg/arrowDownRight";

const ImpactSection = ({colors}: {colors: string}) => {
  return (
    <section
      dir={"rtl"}
      className={`flex flex-col justify-around h-[calc(100vh-88px)] px-20 transition snap-center ${colors}`}
    >
      <div className={"flex"}>
        <div className="flex flex-col w-0.65 bg-white text-darkGray p-8 rounded-40">
          <p className="text-lg">
            <span className="text-orange">
              &apos;מפתח התקציב&apos; &nbsp;
            </span>
          חשף את נתיב המזומנים של הבית היהודי: ממשרד החינוך והסכמים קואליציוניים דרך האגף לתרבות יהודית לארגונים המקורבים למפלגה.
          </p>
          <a href="https://www.youtube.com/watch?v=zBGLQ9FwWtY&ab_channel=Nirshman%27sPR"
            className="text-left text-darkGray hover:underline">
            <br/>
            אפילו עשו על זה כתבה ב&apos;חדשות 12&apos; &gt;&gt;&gt;
          </a>
        </div>
        <div className={"w-0.35"}></div>
      </div>
      <div className="text-7xl md:text-8xl font-primary">
        <span className="text-neon">* IMPACT *</span> בזכות הסדנא
      </div>
      <div className={"flex"}>
        <div className={"w-2/5"}></div>
        <div className="flex items-center w-3/5">
          <p className="text-xs md:text-2xl">
            בזכות ׳ספר החוקים הפתוח׳ (בשיתוף עם עמותת ויקימדיה לישראל) פקודת
            &quot;הבטריקיה האורתודוכסית, 1941&quot; הובהרה כעדיין תקפה במאגר החקיקה
            הלאומי, אחרי שמאגרי מידע אחרים טענו שהפקודה אינה בתוקף וכך הטעו את
            הפרקליטות ואת בית המשפט העליון. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
