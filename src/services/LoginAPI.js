
import axios from 'axios'

export default function LoginrAPI(values,setErrors) {
    axios ( {
      url: 'http://127.0.0.1:3333/api/v1/login',
      method: 'post',
      data: {
        "user_username": values.username,
        "user_password": values.password,
      },
      responseType: 'json', 
    }) .then(response => {
      console.log(response) 
      if (response.data.status!=200){
        setErrors(response.data.error)
    }})
}

