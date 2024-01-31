import React from 'react';
import { FormValues } from '../JoinUsForm';

interface PersonalDetailsProps {
    formData: FormValues;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function PersonalDetails({
    formData,
    handleChange,
}: PersonalDetailsProps) {

    return (
        <>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '10px' }}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '10px' }}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '10px' }} />

            <label htmlFor="homeTown">Hometown</label>
            <input type="text"
                id="homeTown"
                name="homeTown"
                placeholder="Enter your homeTown"
                value={formData.homeTown}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '10px' }} />
                
        </>

    );
}