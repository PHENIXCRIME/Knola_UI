import react,{useState, useEffect,useContext } from 'react';
import LoginAPI from '../../services/LoginAPI'
import {LoginContextWrapper} from '../../contexts/LoginContext'

const useForm = (callback, validate,isSubmitted, setIsSubmitted) => {
  const {setIsLogin,setUsername}= useContext(LoginContextWrapper)
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    let response =  LoginAPI(values)
  }
  let response = null 
  
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  useEffect(
    () => { 
      if (response !== null) {
        setIsLogin(true)
        console.log(response)
      }
      
    },
  )

  return {handleChange,handleSubmit,values,errors};
};

export default useForm;

