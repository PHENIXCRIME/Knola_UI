import React,{useEffect,useContext} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Link } from 'react-router-dom'
import './Form.css';
import {LoginContextWrapper} from '../../contexts/LoginContext'

const FormSignup = ({ submitForm }, isSubmitted, setIsSubmitted) => {
  const {isLogin}= useContext(LoginContextWrapper)
  
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )
  
// useEffect (() => console.log(errors),[errors])

  return (
    
    <div className ='form-container'>
            <div className='form-content-left'>
                  <img className='form-img' src='img/drawkit-grape-pack-illustration-5.svg' alt='spaceship' />
            </div>
            <div className='form-content-right'>
              <form onSubmit={handleSubmit} className='form' noValidate>
                <h1>
                  Welcome to Knola
                </h1>
                <div className='form-inputs'>
                  <label className='form-label'>Username</label>
                  <input
                    className='form-input'
                    type='text'
                    name='username'
                    placeholder='Enter your username'
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
    </div>
  );



};

export default FormSignup;
