import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink } from './NavbarElements'


const Navbar = ({toggle}) => {
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

      <NavBtn>
        <NavBtnLink to = '/login'>Log In</NavBtnLink>
      </NavBtn>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
