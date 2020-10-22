import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Link } from 'react-router-dom'

import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
   
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Welcome to Knola
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email / Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username / email'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>        
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          but you have account Knola click   
          <Link to='/register'> here </Link>
        </span>
      </form>
    </div>
  );



};

export default FormSignup;
