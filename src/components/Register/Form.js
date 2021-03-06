import React, { useState } from 'react';
// import './Form.css';
import './Form.scss'
import FormRegister from './FormRegister';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className='form-container'>
        
        {!isSubmitted ? (
          <FormRegister submitForm={submitForm} />
        ) : (
          <FormSuccess to ='/'/>
        )}
      </div>
    </>
  );
};

export default Form;
