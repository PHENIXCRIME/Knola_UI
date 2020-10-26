import React from 'react'
import Form from '../components/Login/Form'
import styled from 'styled-components'
import Footer from '../components/Footer/index'


const Mainask = styled.div`
  height: 100vh;
  width: 100%;
`
function Login () {
  return (
    <>

    <Mainask>

    <Form />

    </Mainask>
    <Footer />
    
    </>
  )
}
export default Login
