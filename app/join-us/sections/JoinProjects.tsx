import { Dispatch, SetStateAction } from "react";
import Checkbox from "../form/Checkbox";
import SubTitle from "../form/SubTitle";
import { FormData, FormStateType } from "../page";

const ALL_PROJECTS = [
  "ספר החוקים הפתוח",
  "דאטא בוס",
  "פנסיה פתוחה",
  "דאטא סיטי",
  "מפתח התקציב",
  "כנסת פתוחה",
];

const JoinProjects = ({ formData: [formData, setFormData] }: FormStateType) => {
    const { projectsToJoin } = formData;

    const projects = ALL_PROJECTS.map((project, i) => (
        <Checkbox
            key={i}
            isSelected={projectsToJoin.includes(project)}
            onClick={() => {
                const updatedProjects = projectsToJoin.includes(project)
                    ? projectsToJoin.filter((p) => p !== project)
                    : [...projectsToJoin, project];
                setFormData({ ...formData, projectsToJoin: updatedProjects });
            }}
        >
            {project}
        </Checkbox>
    ));

  return (
    <section dir={"rtl"} className={"space-y-5"}>
      <SubTitle>באילו פרויקטים תשמחו להשתתף?</SubTitle>
      <div className={"flex justify-between"}>
        {projects}
      </div>
    </section>
  );
};

export default JoinProjects;
