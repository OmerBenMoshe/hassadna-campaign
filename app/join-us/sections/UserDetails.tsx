import { Dispatch, SetStateAction } from "react";
import SubTitle from "../form/SubTitle";
import TextArea from "../form/TextArea";
import TextInput from "../form/TextInput";
import { FormData, FormStateType } from "../page";


const UserDetails = ({ formData: [formData, setFormData] }: FormStateType) => {
    const { fullName, email, linkedin } = formData.personal;
    const { course, bachelor, master, extraInfo } = formData.educational;

    return (
        <section dir={"rtl"} className="grid grid-cols-3 gap-x-20">
            <div className="flex flex-col col-span-1">
                <SubTitle>פרטים אישיים</SubTitle>
                <TextInput
                    placeholder="שם מלא*"
                    value={fullName}
                    onChange={(e) => setFormData({ ...formData, personal: { ...formData.personal, fullName: e.target.value } })}
                />
                <TextInput
                    placeholder="מייל*"
                    value={email}
                    onChange={(e) => setFormData({ ...formData, personal: { ...formData.personal, email: e.target.value } })}
                />
                <TextInput
                    placeholder="לינקדין (לא חובה אבל מגניב)"
                    value={linkedin}
                    onChange={(e) => setFormData({ ...formData, personal: { ...formData.personal, linkedin: e.target.value } })}
                />
            </div>
            <div className="flex flex-col col-span-1">
                <SubTitle>אני בוגר.ת של...*</SubTitle>
                <TextInput
                    placeholder="קורס מקצועי"
                    value={course}
                    onChange={(e) => setFormData({ ...formData, educational: { ...formData.educational, course: e.target.value }})}
                />
                <TextInput
                    placeholder="תואר ראשון"
                    value={bachelor}
                    onChange={(e) => setFormData({ ...formData, educational: { ...formData.educational, bachelor: e.target.value } })}
                />
                <TextInput
                    placeholder="תואר שני"
                    value={master}
                    onChange={(e) => setFormData({ ...formData, educational: { ...formData.educational, master: e.target.value } })}
                />
            </div>
            <div className="flex flex-col col-span-1">
                <SubTitle>
                    ספרו על הרקע המקצועי שלכם.ן בכמה משפטים, וכל דבר אחר שתרצו לשתף
                    איתנו...
                </SubTitle>
                <TextArea
                    value={extraInfo}
                    onChange={(e) => setFormData({ ...formData, educational: { ...formData.educational, extraInfo: e.target.value } })}
                />
            </div>
        </section>
    );
};

export default UserDetails;
