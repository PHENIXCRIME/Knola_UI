import React from 'react'
import PageProfile from '../components/Profile/index'
import styled from 'styled-components'

const Mainask = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function Profile () {
  return (
    <Mainask>
      <PageProfile/>
      </Mainask>
  )
}
export default Profile
