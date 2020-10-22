import React from 'react'
import styled from 'styled-components'
// import backgroudImage1 from '../assets/Bigsur.jpg'
import BackgroundBlock from '../components/BackgroudBlock'
// import { Title, Subtitle } from '../components/Typography'
import Form from '../components/Register/Form'


const Button = styled.button`
padding: 1rem 1.5rem ; 
background-color :transparent ;
border : #fff solid 1px ; 
border-radius : 8px ; 
color : #fff ; 
margin: 1rem ; 
cursor : pointer ;
transition : background-color .5s ;
text-transform : uppercase ; 

&:hover {
  background-color : #fff ;
  color: #000; 
}
`

function Register () {
  return (
    <div >
      {/* <BackgroundBlock src={backgroudImage1}> */}
      <Form />
      {/* </BackgroundBlock> */}
    </div>
  )
}
export default Register
