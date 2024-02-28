const ImpactSection = ({colors}: {colors: string}) => {
  return (
    <section
      dir={"rtl"}
      className={`flex flex-col justify-around h-[calc(100vh-88px)] px-20 pb-5 transition snap-center overflow-x-hidden overflow-y-hidden ${colors}`}
    >
  
      <div className={"flex mr-12"}>
        <div className="flex flex-col w-0.65 bg-white text-darkGray p-8 rounded-40 relative">
          <p className="text-lg">
            <span className="text-orange">
              &apos;מפתח התקציב&apos; &nbsp;
            </span>
          חשף את נתיב המזומנים של הבית היהודי: ממשרד החינוך והסכמים קואליציוניים דרך האגף לתרבות יהודית לארגונים המקורבים למפלגה.
          </p>
          <a href="https://www.youtube.com/watch?v=zBGLQ9FwWtY&ab_channel=Nirshman%27sPR" target="_blank"
            className="text-left text-darkGray hover:underline hover:decoration-orange decoration-2">
            <br/>
            אפילו עשו על זה כתבה ב&apos;חדשות 12&apos; &gt;&gt;&gt;
          </a>
          <p className="bg-neon text-darGray text-bold rounded-full px-8 py-4 text-lg absolute -bottom-6 -right-12">
              חשיפת שחיתות
        </p>
        </div>
        
        <div className={"w-0.35"}></div>
      </div>
      
      <div className="text-7xl md:text-7.5xl font-primary relative flex">
        <div className="animate-marquee whitespace-nowrap">
        &nbsp;<span className="text-neon"> &nbsp;* IMPACT * </span>&nbsp; בזכות הסדנא 
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
        &nbsp;<span className="text-neon"> &nbsp;* IMPACT * </span>&nbsp; בזכות הסדנא 
        </div>
      </div>


      <div className={"flex mr-12"}>
        <div className={"w-0.35"}></div>

        <div className="flex flex-col w-0.65 bg-white text-darkGray p-8 rounded-40 relative">
          <p className="text-lg">
            הודות ל-
            <span className="text-orange">
              &apos;ספר החוקים הפתוח&apos; &nbsp;
            </span>
           פקודת &quot;הבטריקיה האורתודוכסית, 1941&quot; הובהרה כעדיין תקפה במאגר החקיקה הלאומי, אחרי שמאגרי מידע אחרים טענו שהפקודה אינה בתוקף וכך הטעו את הפרקליטות ואת בית המשפט העליון.
          </p>
          <a href="https://www.facebook.com/openlawil/posts/3073291326247722/" target="_blank"
            className="text-left text-darkGray hover:underline hover:decoration-orange decoration-2">
            <br/>
            קראו עוד על הידיעה בפייסבוק &gt;&gt;&gt;
          </a>
          <p className="bg-purple text-white text-bold rounded-full px-8 py-4 text-lg absolute -bottom-5 -right-12">
              חיזוק בני מיעוט
        </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
