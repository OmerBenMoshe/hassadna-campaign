'use client';
import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import PersonalDetails from './formSections/PersonalDetails';
import VolunteeringDetails from './formSections/VolunteeringDetails';
import StudentDetails from './formSections/StudentDetails';
import PracticalDetails from './formSections/PracticalDetails';

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
    console.log(formData);

    // Redirect to a new page
    window.location.href = '/thank-you'; // Replace '/thank-you' with the path to your thank you page
  };

  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmit}>
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
  );
}
