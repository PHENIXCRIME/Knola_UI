import React from 'react'
import styled from 'styled-components'


const ButtonInputCatagorise = styled.select`
  width : 100px ;
height: 2rem;
border: 1px solid #707070;
border-radius: 5px;
font-size: 15px;
color: #f04823;
&::placeholder {
  color: #707070;
}
`

const Optiontag = styled.option`
  color: #f04823;
`
const Content = styled.div `
  display : flex ; 
  border : 2px solid #3b3b3b ;
  margin : 10% ;
  height : 500px ;
`
const ContentLeft = styled.div `
  border : 2px solid #3b3b3b ;
  width : 50% ;
`
const ContentRight = styled.div `
  border : 2px solid #3b3b3b ;
  width : 50% ;
  display : flex ; 
  flex-direction : column ;
  justify-content : space-around ;
  background : white ;

`
const Image = styled.div ``
const Head = styled.div `
  text-align : center ;
  padding : 4% ;
  font-size : 30px ;
`
const Tag = styled.div `
  display: flex;
  padding: 0 50px;
  p{
    width: 30%;
  }
`

const Question = styled.div `
  display: flex;
  padding: 0 50px;
  p{
    width: 30%;
  }
  `

const FillQuestion =styled.input `
  width : 50% ;
  border: 1px solid gray;
  border-radius: 20px;
  height : 40px ;
`
const Description = styled.div `
  display: flex;
  padding: 0 50px;
  p{
    width: 30%;
  }
  `

const FillDescription =styled.input `
  width : 50% ;
  height : 100px ;
  border-radius: 20px;
  border: 1px solid gray;


`
const Button = styled.div `
  display: flex;
  justify-content: space-around;
`
const Answer = styled.button `
  width : 100px;
  height : 40px ;
  
`

function PostAsk () {
  return (

    <Content>
        <ContentLeft>
          <Image>

          </Image>
        </ContentLeft>

        <ContentRight>

          <Head>
            <p>Ask A Question</p>
          </Head>

          <Tag>
            <p>Tag</p>  
          <ButtonInputCatagorise placeholder=' fex: Content... '>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
              <Optiontag value='math'>Math</Optiontag>
          </ButtonInputCatagorise>
          </Tag>

          <Question>
            <p>Question</p>
            <FillQuestion></FillQuestion>
          </Question>

          <Description>
            <p>Description</p>
            <FillDescription></FillDescription>
          </Description>

          <Button>
          <Answer>Answer</Answer>
          </Button>

        </ContentRight>
    </Content>
  )
}
export default PostAsk