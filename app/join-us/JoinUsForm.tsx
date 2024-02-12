'use client';

import '@/globals.css';
import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import PersonalDetails from './formSections/PersonalDetails';
import VolunteeringDetails from './formSections/VolunteeringDetails';
import StudentDetails from './formSections/StudentDetails';
import PracticalDetails from './formSections/PracticalDetails';
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://fevrcdgxpvtzvsqfqako.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldnJjZGd4cHZ0enZzcWZxYWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2NjY1ODUsImV4cCI6MjAyMzI0MjU4NX0.L_4VuBpOD1J4prWrBPSlnhOW8BdJCwDG7Lc0vlh6rug')

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  homeTown: string;
  volunteeringField: string[];
  otherVolunteering: string;
  school: string;
  studyingField: string;
  major: string;
  practicalBackground: string;
  linkedinProfile: string;
}
export default function JoinUsForm() {
  const [formData, setFormData] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    homeTown: '',
    volunteeringField: [''],
    otherVolunteering: '',
    school: '',
    studyingField: '',
    major: '',
    practicalBackground: '',
    linkedinProfile: '',
  });

  const [showStudentQuestions, setShowStudentQuestions] = useState(false);
  const [isOtherStudyingField, setIsOtherStudyingField] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;
    setFormData((prevState) => {
      const field = prevState[name as keyof FormValues];
      if (Array.isArray(field)) {
        return checked
          ? { ...prevState, [name]: [...field, value] }
          : { ...prevState, [name]: field.filter((option) => option !== value) };
      }
      return prevState;
    });
  };

  const handleOtherChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleYesNoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowStudentQuestions(event.target.value === 'yes');
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => {
      let newState = { ...prevState, [name]: value };

      if (name === 'studyingField' && value === 'other') {
        newState = { ...newState, studyingField: '' };
        setIsOtherStudyingField(true);
      } else {
        setIsOtherStudyingField(false);
      }

      return newState;
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Handle form data here. You can send it to a server or do something else with it.
    // For example, if you're using a state to store form data:
    const { data, error } = await supabase
    .from('volunteer-form')
    .insert([formData]);

  if (error) {
    console.error('Error submitting form: ', error);
  } else {
    console.log('Form submitted successfully: ', data);
    setSubmitted(true);
  }
};

  return (
    <>
      {submitted &&
        <div className="flex flex-col items-center justify-center bg-black text-white h-screen">
          <h1 className='text-5xl'>Thank you for applying!</h1>
          <p> We will get back to you as soon as possible.</p>
        </div>
      }
      
      {!submitted &&
        <div className="flex flex-col items-center justify-center bg-black text-white">
          <div className="demo-notes padding-1 text-black w-full text-center">
            <p className='text-base'>
              Hey, We&apos;d love to know you better. Please fill out the form below to
              get in touch with us. 
            </p>
          </div>
          <h1 className='text-4xl mt-4'>Join Hassadna</h1>
          <form className="form flex flex-col items-center justify-center bg-black" onSubmit={handleSubmit}>
            <PersonalDetails
              formData={formData}
              handleChange={handleChange}
            />

            <VolunteeringDetails
              formData={formData}
              handleCheckboxChange={handleCheckboxChange}
              handleOtherChange={handleOtherChange} />

            <br />

            <StudentDetails
              formData={formData}
              showStudentQuestions={showStudentQuestions}
              isOtherStudyingField={isOtherStudyingField}
              handleChange={handleChange}
              handleRadioChange={handleRadioChange}
              handleOtherChange={handleOtherChange}
              handleYesNoChange={handleYesNoChange}
            />

            <br />

            <PracticalDetails
              formData={formData}
              handleChange={handleChange}
            />

            <button type="submit">Submit</button>

          </form>
        </div>
      }
    </>
  );
}
