import React from 'react'
import styled from 'styled-components'
import Form from '../components/Register/Form'
import Footer from '../components/Footer/index'


const Mainask = styled.div`
  height: 100vh;
  width: 100%;
`
function Register () {
  return (
    <>

    <Mainask>

    <Form />

    </Mainask>
    <Footer />
    
    </>
  )
}
export default Register
