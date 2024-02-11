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
            <label htmlFor="practicalBackground">Detail Your Practical Background In a Few Sentences</label>
            <textarea
                className='text-black rounded-lg bg-white p-2'
                id="practicalBackground"
                name="practicalBackground"
                placeholder="Detail your practical background"
                value={formData.practicalBackground}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '10px' }}
                rows={5}
                cols={100} />

            <label htmlFor="linkedinProfile">Linkedin Profile</label>
            <input
                className='text-black rounded-lg bg-white p-2'
                type="text"
                id="LinkedInProfile"
                name="linkedinProfile"
                placeholder="Enter your linkedin profile"
                value={formData.linkedinProfile}
                onChange={handleChange}
                style={{ display: 'block', marginBottom: '10px' }} />

        </>

    );
}
