import react,{useState, useEffect,useContext } from 'react'
import LoginAPI from '../../services/LoginAPI'
import {LoginContextWrapper} from '../../contexts/LoginContext'

const useForm = (callback, validate,isSubmitted, setIsSubmitted) => {
  const {isLogin,setIsLogin,username,setUsername,loginUser, setLoginUser,setId}= useContext(LoginContextWrapper)
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

  const handleSubmit = async e => {
    e.preventDefault()
    setErrors(validate(values))
    response =  await LoginAPI(values)
    console.log(response)
    if (response) {
      setIsLogin(true)
      setUsername(response.user.user_username)
      setId(response.user.user_id)
      setLoginUser(response.user)
    }
    // await console.log(loginUser)
    // await console.log(username)
  }
  let response = null 
  
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }
    },
    [errors]
  )

  return {handleChange,handleSubmit,values,errors}
}

export default useForm

