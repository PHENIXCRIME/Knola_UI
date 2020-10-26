import React from 'react'
import styled from 'styled-components'

const Post = styled.div `
  border-radius: 20px;
  margin-bottom : 40px ;
  box-shadow : 3px 3px 3px #bdc3c7 ;
  background-color : white ;
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

  p {
    font-size : 12px ;
  }
  
`
const Name = styled.div `
  color : #2c3e50 ;
  padding : 5px ;
  background-color : white ;
  p {
    font-size : 18px ;
    font-weight : bold ;
  }
`

const Question = styled.input`
    margin: 10px 0;
    padding: 5px 10px;
    height: 30px;
    border: none;
    border-bottom:solid 1px gray;
    outline: none;
`


function PostHome (props) { 
  return (

    <Post>
      <Head>
        <Email>
        <p>{props.email}</p>
          {/* <p>Boatcharnchon@mail.com</p> */}
        </Email>
        <Name>
          <p>{props.name}</p>
          {/* <p>Boat Charnchon</p> */}
        </Name>
          <Question type="text" placeholder="What is your question today ? ... "></Question>
      </Head>

    </Post>
  )
}

export default PostHome