import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Post = styled.div `
  margin-bottom : 100px ;
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

const Content = styled.div `
  padding : 10px ;

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

 position : relative ; 
 padding : 15px 30px ; 
 margin : 10px ; 
 background-color: #27022d ;
 color : #fff ;
 text-decoration : none ;
 letter-spacing : 1px ; 
 border : 1px solid #000 ;
 transition : 0.5s;
 overflow:hidden;
 display: flex;
 justify-content: center;

 :hover{
   background:#a41ee9 ;
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
const Commentfill = styled.input`
    margin: 10px 0;
    padding: 5px 10px;
    height: 30px;
    border: none;
    border-bottom:solid 1px gray;
    outline: none;
    width : 70%;
`
const CommentArea = styled.div `
  margin-top : 20px ;
  /* border :  solid 1px gray ; */
`

const CommentData = styled.div `
  padding : 10px ;
  p{
    margin : 10px ;
    font-size : 15px ;
    padding : 10px ;
    border :  solid 1px gray ;
  }
`
function Contentfood () { 
  return (

    <Post>

      <Head>
        <Email>
          <p>Boatcharnchon@mail.com</p>
        </Email>
        <Name>
          <p>Boat Charnchon</p>
        </Name>
      </Head>

      <Content>
        <Title>
            <h3>What the problem politics in thailand?</h3>
        </Title>
        <Description>
            <p>There have been heavy protests in Thailand over the mouth of the people And the claims of human rights in Thailand</p>
        </Description>
        <Commentfill type="text" placeholder=" Fill your comment "></Commentfill>
        <Link to='/'><TagAll>Comment</TagAll></Link>
      </Content>

      <CommentArea>
        <CommentData>
            <p>There have been heavy protests in Thailand over the mouth of the people And the claims of human rights in Thailand</p>
            <p>There have been heavy protests in Thailand over the mouth of the people And the claims of human rights in Thailand</p>
            <p>There have been heavy protests in Thailand over the mouth of the people And the claims of human rights in Thailand</p>
        </CommentData>
      </CommentArea>

    </Post>
  )
}

export default Contentfood