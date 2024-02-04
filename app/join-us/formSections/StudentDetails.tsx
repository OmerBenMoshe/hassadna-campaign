// JoinUsFormContent.tsx
import React from 'react';
import { FormValues } from '../JoinUsForm';

interface StudentDetailsProps {
    formData: FormValues;
    showStudentQuestions: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOtherChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleYesNoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StudentDetails({
    formData,
    showStudentQuestions,
    handleChange,
    handleCheckboxChange,
    handleOtherChange,
    handleYesNoChange,
}: StudentDetailsProps) {
    const fields = ['programming', 'data', 'graphic design', 'ux', 'content', 'other'];
    const studentFields = ['practical course', "bachelor's degree", "master's degree", 'other'];

    return (
        <>

            <label>Are You Currently a Student?</label>

            <div onChange={handleYesNoChange}>
                <input type="radio" value="yes" name="student" /> Yes
                <input type="radio" value="no" name="student" /> No
            </div>

            {showStudentQuestions && (
                <>
                    <label htmlFor="major">What Is Your Major?</label>
                    <input type="text" id="major" name="major" placeholder="Enter your major" value={formData.major} onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />

                    <label> Currently Studying:</label>
                    <br />

                    {studentFields.map((field, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                name="studyingField"
                                value={field}
                                onChange={handleCheckboxChange}
                            />
                            <label>{field}</label>
                        </div>
                    ))}
                    {formData.studyingField.includes('other') && (
                        <input
                            type="text"
                            name="other"
                            placeholder="Please specify"
                            value={formData.other}
                            onChange={handleOtherChange}
                            style={{ display: 'block', marginBottom: '20px' }}
                        />
                    )}

                    <br />

                    <label htmlFor="school">What School Do You Attend?</label>
                    <input type="text" id="school" name="school" placeholder="Enter your school" value={formData.school} onChange={handleChange} style={{ display: 'block', marginBottom: '10px' }} />
                </>
            )}
        </>

    );
}
