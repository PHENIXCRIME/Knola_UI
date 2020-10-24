import React,{useContext,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink } from './NavbarElements'
import {LoginContextWrapper} from '../../contexts/LoginContext'

const Navbar = ({toggle}) => {
  const {isLogin,username}= useContext(LoginContextWrapper)


  useEffect (()=> console.log(isLogin),[isLogin])

  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>Knola</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to ='/ask'> Ask </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to ='/answer'>Answer</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to ='/profile'>Profile</NavLinks>
        </NavItem>
      </NavMenu>
      {!isLogin ?
        <NavBtn>
          <NavBtnLink to = '/login'>Log In</NavBtnLink>
        </NavBtn>:         
        <NavBtn>
          "username"
        </NavBtn>
      }
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
