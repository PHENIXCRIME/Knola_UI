import React from 'react'
import styled from 'styled-components'
import TagContent from '../components/Tag/index'
import PostContent from '../components/PostContent/index'
import PostHome from '../components/PostHome/index'
import ProfileHome from '../components/ProfileHome/index'
import Headtypetext from '../components/HeadTypeTag/index'
import Footer from '../components/Footer/index'
import GetBlogs from '../services/GetBlogs'


const ShowCase = styled.div `
    display: grid;
    grid-template-columns: 0.8fr 1.6fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 2em;
    grid-template-areas: ". . .";
    margin: 114px 20px 0 20px;
    min-height : 100vh;
    @media only screen and (max-width: 820px) 
    
    {
      margin: 114px 20px 0 20px;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr ;
      gap: 2em 0px;
      grid-template-areas:
      "left"
      "center"
      ;
    }
`

const Content__left = styled.div `
`
const Content__right = styled.div `
@media only screen and (max-width: 820px) {
  display :none ;
}
`
const Content__center = styled.div ``

function Mainpost () {

  return (
    <>
      <ShowCase id ="showcase">
          
          <Content__left id ="left">
            <TagContent/>
          </Content__left>

          <Content__center id ="center">
          <Headtypetext title ="Home"/>
            
            <GetBlogs/>

          </Content__center>

          <Content__right id ="right">
            <ProfileHome
              email ="boat@mail.com"
              name ="Boat charchon"/>
          </Content__right>
          
      </ShowCase>
    </>
  )
}
export default Mainpost
