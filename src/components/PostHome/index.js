import React from 'react'
import styled from 'styled-components'
import Form from '../Login/Form'

const Post = styled.div `
  margin-bottom : 20px ;
  box-shadow : 3px 3px 3px #bdc3c7 ;
  background-color : white ;
`
const Head = styled.div `
  padding : 10px ;
  border-bottom : 2px solid #bdc3c7 ;
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


function PostContent () { 
  return (

    <Post>
      <Head>
        <Email>
          <p>Boatcharnchon@mail.com</p>
        </Email>
        <Name>
          <p>Boat Charnchon</p>
        </Name>

          <Question type="text" placeholder="What is your question today ? ... "></Question>
      </Head>

    </Post>
  )
}

export default PostContent 