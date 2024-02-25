import SubTitle from "../form/SubTitle";
import TextArea from "../form/TextArea";

const LastDetails = () => {
  return (
    <section dir={"rtl"} className="flex">
      <div className="flex flex-col grow-[3] min-h-40">
        <SubTitle>לפני שנסיים, האם יש לכם.ן שאלות נוספות?</SubTitle>
        <TextArea />
      </div>
      <div className={"grow-[1] flex items-center justify-center"}>
        <button
          className={
            "bg-neon shadow-sharp rounded-full border-none hover:bg-orange hover:text-white text-darkGray font-bold transition px-24 py-3"
          }
        >
          שליחת השאלון
        </button>
      </div>
    </section>
  );
};

export default LastDetails;