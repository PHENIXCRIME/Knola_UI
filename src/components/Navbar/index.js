import React,{useContext,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink , NavBtnLogout} from './NavbarElements'
import {LoginContextWrapper} from '../../contexts/LoginContext'

const Navbar = ({toggle}) => {
  const {isLogin,setIsLogin,username}= useContext(LoginContextWrapper)

  const handleLogout = e => {
    localStorage.removeItem("user");
    setIsLogin(false)
    console.log(isLogin)
    console.log(username)
  }

  useEffect (()=> console.log(isLogin),[isLogin])

  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>K N O L A</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
      
      <NavMenu>
        <NavItem>
          <NavLinks to ='/ask'> Ask </NavLinks>
        </NavItem>
        {/* <NavItem>
          <NavLinks to ='/answer'>Answer</NavLinks>
        </NavItem> */}
        <NavItem>
          <NavLinks to ='/profile'>Profile</NavLinks>
        </NavItem>
      {isLogin !== true ?
        <NavBtn>
          <NavBtnLink to = '/login'>Log In</NavBtnLink>
        </NavBtn>:         
        <NavBtn>
          {username}
          <NavBtnLogout onClick={handleLogout} >Logout</NavBtnLogout>
        </NavBtn>
      }
      </NavMenu>
      
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar
