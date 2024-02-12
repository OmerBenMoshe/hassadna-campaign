// JoinUsFormContent.tsx
import React from 'react';
import { FormValues } from '../JoinUsForm';

interface StudentDetailsProps {
    formData: FormValues;
    showStudentQuestions: boolean;
    isOtherStudyingField: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOtherChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleYesNoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StudentDetails({
    formData,
    showStudentQuestions,
    isOtherStudyingField,
    handleChange,
    handleRadioChange,
    handleOtherChange,
    handleYesNoChange,
}: StudentDetailsProps) {
    const fields = ['Programming', 'Data analysis', 'Graphic design', 'UX/UI', 'Creating content', 'Other'];
    const studentFields = ['Practical course', "Bachelor's degree", "Master's degree", 'Other'];

    return (
        <>

            <label>Are you currently a student?</label>

            <div onChange={handleYesNoChange}>
                <input type="radio" value="yes" name="student" /> Yes
                <input type="radio" value="no" name="student" /> No
            </div>

            {showStudentQuestions && (
                <>
                    <label htmlFor="major">What is your major?</label>
                    <input type="text" id="major" name="major" placeholder="Enter your major" value={formData.major} onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />

                    <label> Currently Studying:</label>
                    <br />

                    {studentFields.map((field, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name="studyingField"
                                value={field}
                                onChange={handleRadioChange}
                            />
                            <label>{field}</label>
                        </div>
                    ))}
                    {isOtherStudyingField && (
                        <input
                            type="text"
                            name="studyingField"
                            placeholder="Please specify"
                            value={formData.studyingField}
                            onChange={handleOtherChange}
                            style={{ display: 'block', marginBottom: '20px' }}
                        />
                    )}

                    <br />

                    <label htmlFor="school">What university do you attend?</label>
                    <input type="text" id="school" name="school" placeholder="Enter your school" value={formData.school} onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />
                </>
            )}
        </>

    );
}
