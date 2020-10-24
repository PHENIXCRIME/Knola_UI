import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormAsk = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
   
  return (
    <div className ='form-container'>

          <div className='form-content-left'>
                <img className='form-img' src='img/drawkit-grape-pack-illustration-11.svg' alt='spaceship' />
          </div>

          <div className='form-content-right'>  
            <form onSubmit={handleSubmit} className='form' noValidate>
              <h1>
                What the your question ?
              </h1>
              <div className='form-inputs'>
                <label className='form-label'>Question</label>
                <input
                  className='form-input'
                  type='text'
                  name='question'
                  placeholder='Enter your question'
                  value={values.question}
                  onChange={handleChange}
                />
                {errors.question && <p>{errors.question}</p>}
              </div>
              <div className='form-inputs'>
                <label className='form-label'>Description</label>
                <input
                  className='form-input'
                  type='text'
                  name='description'
                  placeholder='Fill your description'
                  value={values.description}
                  onChange={handleChange}
                />
                {errors.description && <p>{errors.description}</p>}
              </div>  
              <button className='form-input-btn' type='submit'>
                Login
              </button>
            </form>
          </div>
    </div>
  );
};

export default FormAsk;
