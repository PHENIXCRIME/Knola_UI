import React from 'react'
import styled from 'styled-components'

const Content = styled.div `
  display : flex ; 
  height : 500px ;
  justify-content: center;
`
const ContentLeft = styled.div `
  border : 5px solid #3b3b3b ;
  width : 50% ;
  border-radius : 20px ;
  background : white ;
  margin : 10px ;
`
const ContentRight = styled.div `
  border : 5px solid #3b3b3b ;
  width : 50% ;
  display : flex ; 
  flex-direction : column ;
  justify-content : space-around ;
  background : white ;
  border-radius : 20px ;
  margin : 10px ;
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

function PageProfile () {
  return (

    <Content>
      
        <ContentRight>

          <Head>
            <p>Ask A Question</p>
          </Head>

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
export default PageProfile