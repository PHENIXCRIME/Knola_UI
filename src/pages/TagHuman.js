import React from 'react'
import styled from 'styled-components'
import TagContent from '../components/Tag/index'
import PostContent from '../components/PostContent/index'
import PostHome from '../components/PostHome/index'
import ProfileHome from '../components/ProfileHome/index'
import Headtypetext from '../components/HeadTypeTag/index'


const ShowCase = styled.div `
    display: grid;
    grid-template-columns: 0.8fr 1.6fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 2em;
    grid-template-areas: ". . .";
    margin: 114px 10px 0 10px;
`
const Content__left = styled.div ``
const Content__center = styled.div ``
const Content__right = styled.div ``

function Mainpost () {

  return (
    <>
      <ShowCase >
          
          <Content__left>
            <TagContent/>
          </Content__left>

          <Content__center >
          <Headtypetext title ="Human"/>

            <PostHome 
            email ="boat@mail.com"
            name ="Boat charchon"/>
            <PostContent 
            email ="boat@mail.com"
            name ="Boat charchon"
            title = "What the problem politics in thailand?"
            description ="There have been heavy protests in Thailand over the mouth of the people 
            And the claims of human rights in Thailand"
            />

          </Content__center>

          <Content__right>
            <ProfileHome
              email ="boat@mail.com"
              name ="Boat charchon"/>
          </Content__right>
          
      </ShowCase>
    </>
  )
}
export default Mainpost
