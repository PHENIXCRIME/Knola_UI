import React from 'react'
import ProfileMain from '../components/Profile/index'
import styled from 'styled-components'
import Footer from '../components/Footer/index'



const Mainask = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function Profile () {
  return (
    <>
    <Mainask>
      <ProfileMain/>
    </Mainask>
      <Footer/>
    </>
  )
}
export default Profile
