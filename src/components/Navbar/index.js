import React,{useContext,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav , NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink , NavBtnLogout , NavUsernameBlock} from './NavbarElements'
import {LoginContextWrapper} from '../../contexts/LoginContext'
import GetLoginUser from '../../services/GetLoginUser'

const Navbar = ({toggle}) => {
  const {isLogin,setIsLogin,setUsername,username,loginUser, setLoginUser}= useContext(LoginContextWrapper)

  const handleLogout = async e => {
    localStorage.removeItem("user");
    setIsLogin(false)
    setUsername(null)
    setLoginUser(null)
  }

  useEffect (()=> 
    console.log(isLogin),[isLogin]
  )

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
          <NavUsernameBlock>{username}</NavUsernameBlock>
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
