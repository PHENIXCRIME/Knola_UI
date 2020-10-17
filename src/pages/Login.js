import React from 'react'
import backgroudImage1 from '../assets/Bigsur.jpg'
import BackgroundBlock from '../components/BackgroudBlock'
// import { Title, Subtitle } from '../components/Typography'
import Form from '../components/Login/Form'


function Login () {
  return (
  <div>
    <BackgroundBlock src={backgroudImage1}>
    <Form />
      </BackgroundBlock>
  </div>  
  )
}
export default Login
