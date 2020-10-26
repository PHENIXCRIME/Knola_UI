import React from 'react'
import styled from 'styled-components'
import image1 from '../../assets/flame-1237.png'

const ButtonInputCatagorise = styled.select`
  width : 100px ;
  height: 2rem;
  border: 2px solid #707070;
  border-radius: 5px;
  font-size: 20px;
  color: #283c86;
`

const Optiontag = styled.option`
  color: #45a247;
`
const Content = styled.div `
  display : flex ; 
  /* border : 5px solid #3b3b3b ; */
  margin : 10% ;
  height : 500px ;
  /* border-radius : 20px ; */
  /* justify-content : center ; */
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

const Image = styled.div `
background-image : url(${image1}) ;
background-repeat : no-repeat ;
background-size : contain ;
width : 550px ;
height : 550px ;
align-items : center ;
margin-top : 20px ;
`

const BoxImage = styled.div `
      display: flex;
    justify-content: center;
`

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
  border: 2px solid gray;
  border-radius: 10px;
  height : 40px ;
  font-size : 20px ;
  outline : none ;
`
const Description = styled.div `
  display: flex;
  padding: 0 50px;
  p{
    width: 30%;
  }
  `

const FillDescription =styled.textarea `
  width : 70% ;
  height : 100px ;
  border-radius: 10px;
  border: 2px solid gray;
  font-size : 20px ;
  outline : none ;
  padding : 5px ;
`
const Button = styled.div `
  display: flex;
  justify-content: space-around;
  
`
const Answer = styled.button `
  width : 150px;
  height : 50px ;
  text-align : center ;
  font-size : 20px ;
  position : relative ;
  border-radius : 10px;
  background-color: #11998e ;
  color : #fff ;
  text-decoration : none ;
  letter-spacing : 1px ; 
  transition : 0.5s;
  overflow:hidden;
  width : 100px ; 
  cursor: pointer;
  outline : none ;
  border : none ;


 :hover{
   background-color: #67B26F;
 }

 ::before { 
   content : '' ;
   position : absolute ; 
   top :0;
   left: -100%;
   width:100%; 
   height:100%;
   background : linear-gradient(90deg,transparent,#FAFFD1,transparent);
   transition:0.7s;
 }

`

function PostAsk () {
  return (

    <Content>
        <ContentLeft>
        <BoxImage>
          <Image src = {image1} />
        </BoxImage>
        </ContentLeft>

        <ContentRight>

          <Head>
            <p>Ask A Question</p>
          </Head>

          <Tag>
            <p>Tag</p>  
          <ButtonInputCatagorise >
              <Optiontag value='Math'>Math</Optiontag>
              <Optiontag value='Science'>Science</Optiontag>
              <Optiontag value='Social'>Social</Optiontag>
              <Optiontag value='Language'>Language</Optiontag>
              <Optiontag value='Human'>Human</Optiontag>
              <Optiontag value='Teachnology'>Teachnology</Optiontag>
              <Optiontag value='Politics'>Politics</Optiontag>
              <Optiontag value='Food'>Food</Optiontag>
              <Optiontag value='Travel'>Travel</Optiontag>
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