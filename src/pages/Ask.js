import React from "react"
import PostAsk from '../components/PostAsk/index'
import styled from 'styled-components'

const Mainask = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

function Ask () { 

  return (
      <Mainask>
        <PostAsk/>
      </Mainask>
  )
}
export default Ask
