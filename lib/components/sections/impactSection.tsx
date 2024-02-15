import ArrowDownLeftSVG from "../svg/arrowDownLeft";
import ArrowDownRightSVG from "../svg/arrowDownRight";

const ImpactSection = () => {
  return (
    <section
      dir={"rtl"}
      className="flex flex-col justify-around h-screen px-20 text-white bg-darkGray"
    >
      <div className={"flex"}>
        <div className="flex items-center w-3/5">
          <p className="text-xs text-left md:text-2xl">
          בזכות ׳מפתח התקציב׳, הסדנא לידע ציבורי חשפה את נתיב המזומנים של הבית היהודי: ממשרד החינוך והסכמים קואליציוניים דרך האגף לתרבות יהודית לארגונים המקורבים למפלגה.
          </p>
          <ArrowDownRightSVG className={"w-full mr-5"} />
        </div>
        <div className={"w-2/5"}></div>
      </div>
      <div className="text-7xl md:text-8xl font-primary">
        <span className="text-neon">* IMPACT *</span> בזכות הסדנא
      </div>
      <div className={"flex"}>
        <div className={"w-2/5"}></div>
        <div className="flex items-center w-3/5">
          <ArrowDownLeftSVG className={"w-full ml-5"} />
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
