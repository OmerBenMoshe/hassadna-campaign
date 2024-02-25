import { Dispatch, SetStateAction } from "react";
import Checkbox from "../form/Checkbox";
import SubTitle from "../form/SubTitle";
import { FormData } from "../page";

const JoinProjects = ({formData: [formData, setFormData]}: {formData: [FormData, Dispatch<SetStateAction<FormData>>]}) => {
  return (
    <section dir={"rtl"} className={"space-y-5"}>
      <SubTitle>באילו פרויקטים תשמחו להשתתף?</SubTitle>
      <div className={"flex justify-between"}>
        <Checkbox label={"ספר החוקים הפתוח"} />
        <Checkbox label={"דאטא בוס"} isSelected={true} />
        <Checkbox label={"פנסיה פתוחה"} />
        <Checkbox label={"דאטא סיטי"} />
        <Checkbox label={"מפתח התקציב"} />
        <Checkbox label={"כנסת פתוחה"} />
      </div>
    </section>
  );
};

export default JoinProjects;
