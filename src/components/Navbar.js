import React from 'react'
import styled from 'styled-components'
import useScroll from '../utils/useScroll'
import { Link } from 'react-router-dom'

const Container = styled.div `
width : 100%; 
position : fixed; 
z-index : 10000;
background-color : ${props => props.isScroll ? '#fff' : 'transparent'};
color : ${props => (props.isScroll ? '#000' : '#fff')};
transition : background-color 0.5s ;
text-shadow : 1px 1px #000 ;
`
const Wrapper = styled.div `
display : flex ; 
flex : 1; 
padding : 2rem ; 
font-size : 25px ; 
`
const Logo = styled.div `

`

const ActionContainer = styled.ul `
display : flex ; 
flex : 2 ;
justify-content : flex-end ; 
`
const Action = styled.li `
padding : 0 1rem ;
`

function Navbar () { 
  const isScroll = useScroll({scrollRange : 20 })
  return ( 
    <Container isScroll={isScroll} >
    <Wrapper>
      <Logo>Knola</Logo>
      <ActionContainer>
        <Action>
          <Link to ='/'>Home</Link>
        </Action>
        <Action>
          <Link to ='/ask'>Ask</Link>
        </Action>
        <Action>
          <Link to ='/answer'>Answer</Link>
        </Action>
        <Action>
          <Link to ='/profile'>Profile</Link>
        </Action>
        <Action>
          <Link to ='/register'>Register</Link>
        </Action>
        <Action>
          <Link to ='/login'>Login</Link>
        </Action>
      </ActionContainer>
    </Wrapper>
    </Container>
  )
}
export default Navbar

