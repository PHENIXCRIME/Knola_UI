import React from 'react'
import styled from 'styled-components'


const Post = styled.div `
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

function ProfileHome (props) { 
  return (

    <Post>
      <Head>
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