import ArrowDownLeftSVG from "../svg/arrowDownLeft";
import ArrowDownRightSVG from "../svg/arrowDownRight";

const ImpactSection = () => {
  return (
    <section
      dir={"rtl"}
      className="flex flex-col justify-around h-screen px-20 text-white bg-darkGray"
    >
      <div className="flex items-center">
        <p className="max-w-screen-sm ml-3 text-3xl text-left">
          בזכות ׳מפתח התקציב׳, הסדנא לידע ציבורי חשפה את נתיב המזומנים של הבית
          היהודי:
          <br />
          ממשרד החינוך והסכמים קואליציוניים דרך האגף לתרבות יהודית לארגונים
          המקורבים למפלגה.
        </p>
        <ArrowDownRightSVG />
      </div>
      <div className="text-9xl">
        <span className="text-neon">* IMPACT *</span> בזכות הסדנא
      </div>
      <div className={'flex'}>
        <div className={'flex-1'}></div>
        <div className="flex items-center flex-1">
          <ArrowDownLeftSVG className={'w-full ml-5'}/>
          <p className="text-3xl">
            בזכות ׳ספר החוקים הפתוח׳ (בשיתוף עם עמותת ויקימדיה לישראל) פקודת
            ״הבטריקיה האורתודוכסית, 1941" הובהרה כעדיין תקפה במאגר החקיקה הלאומי,
            אחרי שמאגרי מידע אחרים טענו שהפקודה אינה בתקוף וכך הטעו את הפרקליטות
            ואת בית המשפט העליון. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
