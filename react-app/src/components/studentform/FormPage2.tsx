import React,{ useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Form.css'
import { useFormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';


function FormPage2() {
    const navigate = useNavigate();
    const { formFields, setFormFields, formErrors, setFormErrors } = useFormContext();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; 
        setFormFields((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        if (formErrors[name]) {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: value.trim() ? '' : 'This field is required',
            }));
        }
    };

    const handleBack = () => {
        
        navigate('/');
    
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let errors = { ...formErrors };
        let hasError = false;

        

        // Name validation
        if (!formFields.track.trim()) {
            errors.track = 'Error: This is a required field.';
            hasError = true;
        } else {
            errors.track = '';
        }

        // Major validation
        if (!formFields.ideaName.trim()) {
            errors.ideaName = 'Error: This is a required field.';
            hasError = true;
        } else {
            errors.ideaName = '';
        }

        // Email validation
        if (!formFields.question1.trim()) {
            errors.question1 = 'This is a required field.';
            hasError = true;
        } else {
            errors.question1 = '';
        }

        //Phone Number Validation
        if (!formFields.question2.trim()) {
            errors.question2 = 'This is a required field.';
            hasError = true;
        } else {
            errors.question2 = '';
        }

        if (!formFields.question3.trim()) {
            errors.question3 = 'This is a required field.';
            hasError = true;
        } else {
            errors.question3 = '';
        }

        if (!formFields.question4.trim()) {
            errors.question4 = 'This is a required field.';
            hasError = true;
        } else {
            errors.question4 = '';
        }

        if (!formFields.timeToLaunch.trim()) {
            errors.timeToLaunch = 'This is a required field.';
            hasError = true;
        } else {
            errors.timeToLaunch = '';
        }

        // Set form errors
        setFormErrors(errors);

        // If any errors exist, stop form submission
        if (hasError) {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formFields)
        };
        
        try {
            const response = await fetch('http://localhost:8080/studentform', requestOptions);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            
            
        } catch (error) {
            console.error('There was an error!', error);
        }

        // If no errors, handle form submission
        alert('Thank you for submitting the form! You are being redirected to: https://entrepreneurship.umbc.edu/');
        const navigateToExternalURL = (url: string) => {
         window.location.href = url;
          };
         navigateToExternalURL('https://entrepreneurship.umbc.edu/')
    };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form-page-2">
    <div className='label'>
    <label>
        Please Choose A Track: (Only Pick One)<span style={{ color: 'red' }}>*</span>
    </label>
    <label>
            <input
                type="radio"
                name="track"
                value="Social Impact"
                checked={formFields.track === "Social Impact"}
                onChange={handleChange}
            />
            Social Impact
        </label>
    </div>
    <div>
        <label>
            <input
                type="radio"
                name="track"
                value="Technology and Innovation"
                checked={formFields.track === "Technology and Innovation"}
                onChange={handleChange}
            />
            Technology and Innovation
        </label>
        {formErrors.track && <p className='input-error-text'>{formErrors.track}</p>}
    </div>
    <div className='label'>
      <label>
        Name of your Idea: <span style={{ color: 'red' }}>*</span>
        <br></br>
        <input
          type="text" 
          className={formErrors.ideaName ? 'input-error' : 'input-normal'}
          name ="ideaName"
          value={formFields.ideaName}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.ideaName && <p className='input-error-text'>{formErrors.ideaName}</p>}
      </div>
    <div className='label'>
      <label>
      Opportunity/Market Problem: Explain how current market conditions are creating an opportunity for your product/service. Convince the investor of the uniqueness of the business and the NEED for your company. <span style={{ color: 'red' }}>*</span>
        <textarea 
          name ="question1"
          value={formFields.question1}
          className='large-input'
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.question1 && <p style={{ color: 'red' }}>{formErrors.question1}</p>}
      </div>
    <div className='label'>
      <label>
      Marketplace and Competition: Provide a clear description of your target market and any market segments that may exist within that market.  Include potential market size, growth rate, current or potential direct and indirect competitors.  Briefly describe the competitive outlook and dynamics of the relevant market in which you will operate <span style={{ color: 'red' }}>*</span>
        <textarea
          name='question2'
          className='large-input'
          value={formFields.question2}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.question2 && <p style={{ color: 'red' }}>{formErrors.question2}</p>} 
    </div>
    <div className='label'>
      <label>
      Resources Available/Needed: List the resources, people, technology, facilities, equipment and funding needed to make your project a success. How do you plan to acquire these resources? <span style={{ color: 'red' }}>*</span>
        <textarea
          name='question3'
          className='large-input'
          value={formFields.question3}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.question3 && <p style={{ color: 'red' }}>{formErrors.question3}</p>} 
    </div>
    <div className='label'>
      <label>
      Compelling Investment Opportunity: List the main reasons investors should consider investing in your company.<span style={{ color: 'red' }}>*</span>
        <textarea
          name='question4'
          className='large-input'
          value={formFields.question4}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.question4 && <p style={{ color: 'red' }}>{formErrors.question4}</p>} 
    </div>
    <div className='label'>
    <label>
        In how much time do you expect to launch your business:<span style={{ color: 'red' }}>*</span>
    </label>
    <label>
            <input
                type="radio"
                name="timeToLaunch"
                value="1-2 Months"
                checked={formFields.timeToLaunch === "1-2 Months"}
                onChange={handleChange}
            />
            1-2 Months
        </label>
    </div>
    <div>
        <label>
            <input
                type="radio"
                name="timeToLaunch"
                value="2-6 Months"
                checked={formFields.timeToLaunch === "2-6 Months"}
                onChange={handleChange}
            />
            2-6 Months
        </label>
        <label>
            <input
                type="radio"
                name="timeToLaunch"
                value="6-12 Months"
                checked={formFields.timeToLaunch === "6-12 Months"}
                onChange={handleChange}
            />
            6-12 Months
        </label>
        <label>
            <input
                type="radio"
                name="timeToLaunch"
                value="1-2 Years"
                checked={formFields.timeToLaunch === "1-2 Years"}
                onChange={handleChange}
            />
            1-2 Years
        </label>
        <label>
            <input
                type="radio"
                name="timeToLaunch"
                value="2 Years or More"
                checked={formFields.timeToLaunch === "2 Years or More"}
                onChange={handleChange}
            />
            2 Years or More
        </label>
        {formErrors.timeToLaunch && <p className='input-error-text'>{formErrors.timeToLaunch}</p>}
    </div>
    <div className="submit-button-container">
    <button type="button" className="cancel-button" onClick={handleBack}>
        Back
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}
export default FormPage2
