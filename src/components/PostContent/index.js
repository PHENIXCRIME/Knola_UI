import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Post = styled.div `
  margin-bottom : 100px ;
  box-shadow : 3px 3px 3px #bdc3c7 ;
  background-color : white ;
  border-radius: 20px;
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

const Content = styled.div `
  padding : 5px ;

`
const Title = styled.div `
  padding : 10px ;
  text-align : left ;
  h3 { 
    font-size : 25px ;
    font-weight : bold ;
  }

`
const Description = styled.div `
  padding : 10px ;
  p{
    font-size : 15px ;
  }
`
const TagAll = styled.button `
border : #333 1px solid ; 
border-radius : 10px;
padding : 1em ; 
text-align : center ;
font-size : 18px ;

 position : relative ; 
 padding : 15px 30px ; 
 margin : 10px ; 
 background-color: #67B26F ;
 color : #fff ;
 text-decoration : none ;
 letter-spacing : 1px ; 
 border : 1px solid #000 ;
 transition : 0.5s;
 overflow:hidden;
 display: flex;
 justify-content: center;
 border : none ;
 outline : none ;
cursor: pointer;
 :hover{
   background-color:#4ca2cd ;
  outline : none ;
   
 }

 ::before { 
   content : '' ;
   position : absolute ; 
   top :0;
   left: -100%;
   width:100%; 
   height:100%;
   background : linear-gradient(90deg,transparent,#fff,transparent);
   transition:0.5s;
 }

 :hover::before{
  left:100% ;
 }
`

function PostContent (props) { 

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

      <Content>
        <Title>
            <h3>{props.title}</h3>
        </Title>
        <Description>
            <p>{props.description}</p>
        </Description>
        <Link to='/question'><TagAll>Comment</TagAll></Link>
      </Content>

    </Post>
  )
}

export default PostContent 