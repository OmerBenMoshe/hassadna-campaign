import SelectButton from "../form/SelectButton"
import SubTitle from "../form/SubTitle"
import { FormStateType } from "../page"

const ALL_SKILLS = [
    "עיצוב חווית משתמש",
    "עיצוב קמפיינים",
    "קופירייטינג",
    "אינפוגרפיקה",
    "עיצוב גרפי",
    "פיתוח תוכנה",
    "ניתוח נתונים",
    "ניהול מוצר",
    "ניהול מערכות מידע",
    "ניהול פרויקט"
]

const ProfSkills = ({ formData: [formData, setFormData] }: FormStateType) => {
    const { professional } = formData;
    const handleSkillClick = (skill: string) => {
        const updatedProfessional = professional.includes(skill)
            ? professional.filter((s) => s !== skill)
            : [...professional, skill];
        setFormData({ ...formData, professional: updatedProfessional });
    };
    const skills = ALL_SKILLS.map((skill, i) => (
        <SelectButton
            key={i}
            isSelected={professional.includes(skill)}
            onClick={() => handleSkillClick(skill)}
            className={'col-span-1'}
        >
            {skill}
        </SelectButton>
    ));

    return (
        <section dir={'rtl'}>
            <SubTitle>באיזה תחומים תרצו לתרום?*</SubTitle>
            <div className="grid grid-cols-5 gap-x-8">
                {skills}
            </div>
        </section>
    );
}

export default ProfSkills;
