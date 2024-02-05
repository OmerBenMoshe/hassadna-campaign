import React from 'react';
import { FormValues } from '../JoinUsForm';

interface VolunteeringDetailsProps {
    formData: FormValues;
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleOtherChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function VolunteeringDetails({
    formData,
    handleCheckboxChange,
    handleOtherChange,
}: VolunteeringDetailsProps) {
    const fields = ['programming', 'data', 'graphic design', 'ux', 'content', 'other'];
    const studentFields = ['practical course', "bachelor's degree", "master's degree", 'other'];

    return (
        <>
            <label htmlFor="volunteeringField">What field are you interested in volunteering in?</label>
            {fields.map((field, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        name="volunteeringField"
                        value={field}
                        onChange={handleCheckboxChange}
                    />
                    <label>{field}</label>
                </div>
            ))}
            {formData.volunteeringField.includes('other') && (
                <input
                    type="text"
                    name="otherVolunteering"
                    placeholder="Please specify"
                    value={formData.otherVolunteering}
                    onChange={handleOtherChange}
                    style={{ display: 'block', marginBottom: '20px' }}
                />
            )}

        </>

    );
}
