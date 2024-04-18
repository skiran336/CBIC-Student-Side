import React,{ useEffect } from 'react';
import './Form.css'
import { useFormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';
import labels from './labels';

//This is used to build second page of CBIC entry form
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

    //This is used to handle the back button on page
    const handleBack = () => {
        
        navigate('/');
    
      };

    //This is used to handle the submit button on page
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

        //question3 Validation
        if (!formFields.question3.trim()) {
            errors.question3 = 'This is a required field.';
            hasError = true;
        } else {
            errors.question3 = '';
        }

        //question4 validation
        if (!formFields.question4.trim()) {
            errors.question4 = 'This is a required field.';
            hasError = true;
        } else {
            errors.question4 = '';
        }

        //timeTOLaunch radio buttons validation
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

        //This is used to store the data in the form into MongoDB database
        const apiUrl = 'https://cbic-student-backened-24c30721914b.herokuapp.com'; 
        const requestOptions = {
         method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formFields)
        };

        try {
          const response = await fetch(`${apiUrl}/studentform`, requestOptions);
          if (!response.ok) {
                if (response.status === 401) {
        }
        throw new Error(`Network response was not ok: ${response.status}`);
        }
        } catch (error) {
    
            console.error('There was an error!', error);
        }

        // If no errors, handle form submission
        alert('Thank you for submitting the form! You are being redirected to: https://entrepreneurship.umbc.edu/');
        const navigateToExternalURL = (url: string) => {
            window.location.replace(url);
          };
         navigateToExternalURL('https://entrepreneurship.umbc.edu/')
    };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form-page-2">
    <div className='label'>
    <label>
        {labels.track}<span style={{ color: 'red' }}>*</span>
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
        {labels.idea}<span style={{ color: 'red' }}>*</span>
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
      {labels.question1} <span style={{ color: 'red' }}>*</span>
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
      {labels.question2} <span style={{ color: 'red' }}>*</span>
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
      {labels.question3} <span style={{ color: 'red' }}>*</span>
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
      {labels.question4}<span style={{ color: 'red' }}>*</span>
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
        {labels.timeToLaunch}<span style={{ color: 'red' }}>*</span>
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
