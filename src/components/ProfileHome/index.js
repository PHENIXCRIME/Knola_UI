import React,{useContext} from 'react'
import styled from 'styled-components'
import image1 from '../../assets/flame-save-to-bookmarks.png'
import {LoginContextWrapper} from '../../contexts/LoginContext'


const Post = styled.div `
  display : flex ; 
  flex-direction : column ;
  justify-content : space-between ;
  margin-right : 20px ;
  box-shadow : 3px 3px 3px #bdc3c7 ;
  background-color : white ;
  border-radius: 20px;
`
const Head = styled.div `
  padding : 10px ;
  display : flex ; 
  flex-direction: column; 
  justify-content : space-around ;
  height: 192px;
`

const Email = styled.div `
  color : #2c3e50 ;
  padding : 5px ;
  background-color : white ;
  text-align : center ;
  p {
    font-size : 12px ;
  }
  
`
const Name = styled.div `
  color : #2c3e50 ;
  padding : 5px ;
  background-color : white ;
  text-align : center ;

  p {
    font-size : 18px ;
    font-weight : bold ;
  }
`
const Image = styled.div `
background-image : url(${image1}) ;
background-repeat : no-repeat ;
background-size : contain ;
width : 150px ;
height : 150px ;
align-items : center ;
`

const BoxImage = styled.div `
      display: flex;
    justify-content: center;
`

function ProfileHome (props) { 
  const {isLogin,setIsLogin,setUsername,username,loginUser, setLoginUser}= useContext(LoginContextWrapper)
  console.log(username)
  return (

    <Post>
      <Head>
        <BoxImage>
          <Image src = {image1} />
        </BoxImage>
        {isLogin ?     
          <Email>
            <p>{props.email}</p>
          </Email> 
          :
          <Email>
            <p>Please Login</p>
          </Email> 
        } 
        {isLogin ?     
        <Name>
          <p>{username}</p>
        </Name>
          :
          <div></div>
        } 
      </Head>

    </Post>
  )
}

export default ProfileHome