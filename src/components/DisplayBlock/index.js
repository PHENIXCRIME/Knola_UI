import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div `
  height : 100vh ;
  width : auto ; 
  background-image : url(${props => props.src}) ; 
  background-repeat : repeat ;
  background-size : cover ; 
  background-position : fixed ; 
  background-position-y : -100px;

  position  :relative ;
`


function DisplayBlock ({src , height = 100,children}) {
  return (
    <BackgroundImage src = {src} height = {height}>
        {children}
    </BackgroundImage>
  )
}

export default DisplayBlock 