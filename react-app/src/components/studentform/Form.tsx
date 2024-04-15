import React, { useEffect } from 'react';
import './FormPage2.css'
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './FormContext';


function Form() {
    const navigate = useNavigate();
    const { formFields, setFormFields, formErrors, setFormErrors } = useFormContext();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        const newErrors = { ...formErrors, [name]: '' };
        if (['email', 'email2', 'email3', 'email4'].includes(name) && value) {
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          if (!isValidEmail) {
              newErrors[name] = 'Invalid email address';
          }
      }
      
      if (name === 'phoneNumber' && value) {
          const isValidPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
          if (!isValidPhone) {
              newErrors[name] = 'Invalid phone number';
          }
      }

          setFormErrors(newErrors);
    };  
    
    const handleCancel = () => {
        
            window.location.href='https://entrepreneurship.umbc.edu/competitions/the-cangialosi-business-innovation-competition/'
    
      };
      

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        let errors = { ...formErrors };
        let hasError = false;
        // Name validation

        if (!formFields.name.trim()) {
            errors.name = 'Error: This is a required field.';
            hasError = true;
        } else {
            errors.name = '';
        }

        // Major validation
        if (!formFields.major.trim()) {
            errors.major = 'Error: This is a required field.';
            hasError = true;
        } else {
            errors.major = '';
        }

        // Email validation
        if (!formFields.email.trim()) {
            errors.email = 'Error: This is a required field.';
            hasError = true;
        } 
        else if(formFields.email.trim()){
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email);
            if (!isValidEmail) {
              errors.email = 'Invalid email address';
              hasError = true;
            }

        }
        else {
            errors.email = '';
        }

        //Phone Number Validation
        if (!formFields.phoneNumber.trim()) {
            errors.phoneNumber = 'Error: This is a required field.';
            hasError = true;
        }
        else if(formFields.phoneNumber.trim()){
          const isValidPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formFields.phoneNumber);
            if (!isValidPhone) {
              errors.phoneNumber = 'Invalid phone number';
              hasError = true;
            }
        }
        else {
            errors.phoneNumber = '';
        }

        //Class Standing Validation
        if (!formFields.classStanding.trim()) {
            errors.classStanding = 'Error: This is a required field.';
            hasError = true;
        }
         else{
            errors.classStanding = '';
        }

        if(formFields.email2.trim()){
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email2);
            if (!isValidEmail) {
              errors.email2 = 'Invalid email address';
              hasError = true;
            }
        }

        if(formFields.email3.trim()){
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email3);
            if (!isValidEmail) {
              errors.email3 = 'Invalid email address';
              hasError = true;
            }
        }

        if(formFields.email4.trim()){
          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email4);
            if (!isValidEmail) {
              errors.email4 = 'Invalid email address';
              hasError = true;
            }

        }

        setFormErrors(errors);

        if(hasError){
          return;
        }

        navigate('/formpage2/');

    };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} className="form">
    <div className='label'>
      <label>
        Name (First and Last): <span style={{ color: 'red' }}>*</span>
        <input
          type="text" 
          name ="name"
          value={formFields.name}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.name && <p className='input-error-text'>{formErrors.name}</p>}
    </div>
    <div className='label'>
      <label>
        Major:<span style={{ color: 'red' }}>*</span>
        <br></br>
        <input
          type="text" 
          name ="major"
          value={formFields.major}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.major && <p style={{ color: 'red' }}>{formErrors.major}</p>}
      </div>
    <div className='label'>
      <label>
        UMBC Email Id: <span style={{ color: 'red' }}>*</span>
        <input
          type="text" 
          name='email'
          value={formFields.email}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>} 
    </div>
    <div className='label'>
      <label>
        Cell Phone Number: <span style={{ color: 'red' }}>*</span>
        <input
          type="text" 
          name='phoneNumber'
          value={formFields.phoneNumber}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.phoneNumber && <p style={{ color: 'red' }}>{formErrors.phoneNumber}</p>} 
    </div>
    <div className='label'>
    <label>
        Class Standing: YOU MUST BE AN ACTIVE STUDENT<span style={{ color: 'red' }}>*</span>
    </label>
    <label>
            <input
                type="radio"
                name="classStanding"
                value="Undergraduate"
                checked={formFields.classStanding === "Undergraduate"}
                onChange={handleChange}
            />
            Undergraduate
        </label>
    </div>
    <div>
        <label>
            <input
                type="radio"
                name="classStanding"
                value="Graduate"
                checked={formFields.classStanding === "Graduate"}
                onChange={handleChange}
            />
            Graduate
        </label>
        {formErrors.classStanding && <p style={{ color: 'red' }}>{formErrors.classStanding}</p>} 
    </div>
    <div className='label'>
      <label>
        Team Memeber #2 Name: 
        <input
          type="text" 
          name='name2'
          value={formFields.name2}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
    </div>
    <div className='label'>
      <label>
        Team Memeber #2 Email: 
        <input 
          type="text" 
          name='email2'
          value={formFields.email2}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.email2 && <p style={{ color: 'red' }}>{formErrors.email2}</p>} 
    </div>
    <div className='label'>
      <label>
        Team Memeber #3 Name: 
        <input
          name='name3'
          type='text'
          value={formFields.name3}
          onChange={handleChange}
          placeholder="Enter Input Here"
      />
      </label>
    </div>
    <div className='label'>
      <label>
        Team Memeber #3 Email: 
        <input
          type="text" 
          name='email3'
          value={formFields.email3}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.email3 && <p style={{ color: 'red' }}>{formErrors.email3}</p>} 
    </div>
    <div className='label'>
      <label>
        Team Memeber #4 Name:
        <input
          type="text" 
          name='name4'
          value={formFields.name4}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
    </div>
    <div className='label'>
      <label>
        Team Memeber #4 Email: 
        <input
          type="text" 
          name='email4'
          value={formFields.email4}
          onChange={handleChange}
          placeholder="Enter Input Here"
        />
      </label>
      {formErrors.email4 && <p style={{ color: 'red' }}>{formErrors.email4}</p>} 
    </div>
    
    <div className="submit-button-container">
        <button type="button" className="cancel-button" onClick={handleCancel}>
        Cancel
        </button>
        <button type="submit" className="submit-button">
          Save & Continue
        </button>
      </div>
    </form>
    </div>
    
  )
}
export default Form
