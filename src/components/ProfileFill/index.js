import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import image1 from '../../assets/flame-1209.png'

const Content = styled.div `
  display : flex ; 
  margin : 10% ;
  height : 500px ;
`
const ContentLeft = styled.div `
  border : 5px solid #3b3b3b ;
  width : 60% ;
  border-radius : 20px ;
  background : white ;
  margin : 10px ;
  
`
const ContentRight = styled.div `
  border : 5px solid #3b3b3b ;
  width : 40% ;
  display : flex ; 
  flex-direction : column ;
  justify-content : space-around ;
  background : white ;
  border-radius : 20px ;
  margin : 10px ;
  padding : 20px ;
`

const Image = styled.div `
  background-repeat : no-repeat ;
  background-size : contain ;
  background-image : url(${image1}) ;
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
  text-align : center;
  padding : 5% ;
  font-size : 45px ;
  font-weight : bold ;
`
const MainAbout = styled.div `
  display: flex;
  justify-content : space-between ;
  /* flex-direction : column ; */
  
`
const Mainname = styled.div `
  display: flex;
  padding: 0 50px 0 20px;
  /* flex-direction : column ; */
  justify-content : space-between ;
  
  h1 {
    font-weight : bold ;
    font-size : 30px;
    margin-right  :20px ;
    /* margin-bottom : 10px ; */
  }
  p{
    font-size: 30px;
    /* margin-bottom : 10px ;    */
  }
`

const Mainsurname = styled.div `
  display: flex;
  padding: 0 20px 0 50px;
  /* flex-direction : column ; */
  justify-content : space-between ;

  h1 {
    font-weight : bold ;
    font-size : 30px;
    margin-right  :20px ;
    /* margin-bottom : 10px ; */

  }

  p{
    font-size: 30px;
    /* margin-bottom : 10px ;    */
  }
`

const Bio = styled.div `
  display: flex;
  justify-content :space-around ;
  padding : 5% 3%;

  p{

    font-size : 30px;
    font-weight : bold ;
    margin-right : 10px ;
  }
  `

const FillBio =styled.textarea `
  width : 90% ;
  height : 100px ;
  border-radius: 10px;
  border: 2px solid gray;
  font-size : 20px ;
  outline : none ;
  padding : 5px ;
  margin :0 0 0 20px ;
`
const Button = styled.div `
  display: flex;
  justify-content: space-around;
  
`
const Done = styled.button `
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

function Profile () {
  return (

    <Content>
        <ContentLeft>
        <BoxImage>
          <Image src = {image1} />
        </BoxImage>
        </ContentLeft>

        <ContentRight>

          <Head>
            <p>Profile</p>
          </Head>

        <MainAbout>
          <Mainname>
            <h1>Name</h1>
            <p>John</p>
          </Mainname>
        </MainAbout>

          <Bio>
            <p>Bio</p>
            <p></p>
            <FillBio></FillBio>
          </Bio>

          <Link to='/profile'>
          <Button>
          <Done>Done</Done>
          </Button>
          </Link>

        </ContentRight>
    </Content>
  )
}
export default Profile