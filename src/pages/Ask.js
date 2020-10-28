import React from "react"
import PostAsk from '../components/PostAsk/index'
import styled from 'styled-components'
import Footer from '../components/Footer/index'

const Mainask = styled.div`
  height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
`

function Ask () { 

  return (
    <>
      <Mainask>
        <PostAsk/>
      </Mainask>
      <Footer/>
    </>
  )
}
export default Ask
