import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormFields {
  name: string;
  major: string;
  email: string;
  phoneNumber: string;
  classStanding: string;
  name2: string;
  email2: string;
  name3: string;
  email3: string;
  name4: string;
  email4: string;
  track: string;
  ideaName: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  timeToLaunch: string;
}

interface FormErrors {
    [key: string]: string;
  }

  
interface FormContextType {
    formFields: FormFields;
    setFormFields: React.Dispatch<React.SetStateAction<FormFields>>;
    formErrors: FormErrors;
    setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}


const FormContext = createContext<FormContextType | undefined>(undefined);

interface FormProviderProps {
  children: ReactNode;
}


export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formFields, setFormFields] = useState<FormFields>({
    name: '',
    major: '',
    email: '',
    phoneNumber: '',
    classStanding: '',
    name2: '',
    email2: '',
    name3: '',
    email3: '',
    name4: '',
    email4: '',
    track: '',
    ideaName: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    timeToLaunch: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  return (
    <FormContext.Provider value={{ formFields, setFormFields, formErrors, setFormErrors }}>
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
