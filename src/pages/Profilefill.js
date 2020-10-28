import React from 'react'
import Profile from '../components/ProfileFill/index'
import styled from 'styled-components'
import Footer from '../components/Footer/index'


const Mainask = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function Profilefill () {
  return (
    <>
      <Mainask>
      <Profile/>
      </Mainask>
      <Footer/>
    </>
  )
}
export default Profilefill
