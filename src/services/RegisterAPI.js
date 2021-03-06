import axios from 'axios'

export default function RegisterAPI(values,setErrors) {
  console.log(values)
    axios ( {
      url: 'http://127.0.0.1:3333/api/v1/users',
      method: 'post',
      data: {
        "user_first_name": values.firstname,
        "user_last_name": values.lastname,
        "user_age": values.age,
        "user_gender": values.gender,
        "user_email": values.email,
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
