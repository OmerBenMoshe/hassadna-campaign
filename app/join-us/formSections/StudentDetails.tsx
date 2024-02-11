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
    const fields = ['programming', 'data', 'graphic design', 'ux', 'content', 'other'];
    const studentFields = ['practical course', "bachelor's degree", "master's degree", 'other'];

    return (
        <>

            <label>Are You Currently a Student?</label>

            <div className='space-x-7 items-center text-center' onChange={handleYesNoChange}>
                <input className='' type="radio" value="yes" name="student" /> Yes
                <input className='' type="radio" value="no" name="student" /> No
            </div>

            {showStudentQuestions && (
                <>
                    <label htmlFor="major">What Is Your Major?</label>
                    <input
                        className='text-black rounded-lg bg-white p-2'
                        type="text"
                        id="major"
                        name="major"
                        placeholder="Enter your major"
                        value={formData.major}
                        onChange={handleChange}
                        style={{ display: 'block', marginBottom: '10px' }} />

                    <label> Currently Studying:</label>
                    <br />
                    <div className='grid grid-cols-2'>
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
                    </div>
                    {isOtherStudyingField && (
                        <input
                            className='text-black rounded-lg bg-white p-2'
                            type="text"
                            name="studyingField"
                            placeholder="Please specify"
                            value={formData.studyingField}
                            onChange={handleOtherChange}
                            style={{ display: 'block', marginBottom: '20px' }}
                        />
                    )}

                    <br />

                    <label htmlFor="school">What School Do You Attend?</label>
                    <input
                        className='text-black rounded-lg bg-white p-2'
                        type="text"
                        id="school"
                        name="school"
                        placeholder="Enter your school"
                        value={formData.school}
                        onChange={handleChange}
                        style={{ display: 'block', marginBottom: '10px' }} />
                </>
            )}
        </>

    );
}
