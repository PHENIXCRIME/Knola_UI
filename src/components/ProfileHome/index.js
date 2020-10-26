import React from 'react'
import styled from 'styled-components'
import image1 from '../../assets/flame-1237.png'


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
  return (

    <Post>
      <Head>
        <BoxImage>
          <Image src = {image1} />
        </BoxImage>
        <Email>
          <p>{props.email}</p>
        </Email>
        <Name>
          <p>{props.name}</p>
        </Name>
      </Head>

    </Post>
  )
}

export default ProfileHome