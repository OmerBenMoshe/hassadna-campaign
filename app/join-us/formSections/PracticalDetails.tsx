import React from 'react';
import { FormValues } from '../JoinUsForm';

interface PracticalDetailsProps {
    formData: FormValues;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function PersonalDetails({
    formData,
    handleChange,
}: PracticalDetailsProps) {
    return (
        <>
            <label htmlFor="practicalBackground">What is your practical background?</label>
            <textarea
                id="practicalBackground"
                name="practicalBackground"
                placeholder="Practical background"
                value={formData.practicalBackground}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '10px' }} 
                rows={5}
                cols={100}/>

            <label htmlFor="linkedinProfile">Linkedin Profile</label>
            <input
                type="text"
                id="LinkedInProfile"
                name="linkedinProfile"
                placeholder="Enter your LinkedIn profile"
                value={formData.linkedinProfile}
                onChange={handleChange}
                style={{ display: 'block', marginBottom: '10px' }} />

        </>

    );
}
