import React,{useEffect} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Link } from 'react-router-dom'
// import './Form.css';
import './Form.scss'

  const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  
  useEffect (() => console.log(errors),[errors])

  return (
    <div className ='form-container'>

        <div className='form-content-left'>
          <img className='form-img' src='img/drawkit-grape-pack-illustration-3.svg' alt='spaceship' />
        </div>
        <div className='form-content-right'>
          <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
              Get started with knola today ! Create your account !
            </h1>
            <div className='form-inputs'>
              <label className='form-label'>Firstname</label>
              <input
                className='form-input'
                type='text'
                name='firstname'
                placeholder='Enter your firstname'
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Lastname</label>
              <input
                className='form-input'
                type='text'
                name='lastname'
                placeholder='Enter your Lastname'
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.Lastname && <p>{errors.Lastname}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Age</label>
              <input
                className='form-input'
                type='text'
                name='age'
                placeholder='Enter your age'
                value={values.age}
                onChange={handleChange}
              />
              {errors.Age && <p>{errors.Age}</p>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Gender</label>
              <input
                className='form-input'
                type='text'
                name='gender'
                placeholder='Enter your gender'
                value={values.gender}
                onChange={handleChange}
              />
              {errors.Gender && <p>{errors.Gender}</p>}
            </div>
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
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
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
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
              Sign up
            </button>
            <span className='form-input-login'>
            Already have a knola account?    
              <Link to='/login'> here </Link> 
            </span>
          </form>
        </div>
    </div>
  );
};

export default FormSignup;
