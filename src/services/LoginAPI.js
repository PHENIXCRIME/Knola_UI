
import axios from 'axios'

export default function LoginrAPI(values,setErrors) {
    axios ( {
      url: 'http://127.0.0.1:3333/api/v1/login',
      method: 'post',
      data: {
        "user_username": values.username,
        "user_password": values.password,
      },
      responseType: 'json'
    }) .then( response => {
      
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      console.log(response.data)
      return response.data
    })
}

