import React from 'react'
import styled from 'styled-components'
import ProfileHome from '../components/ProfileHome/index'
import PostHome from '../components/PostHome/index'
import TagContent from '../components/Tag/index'
import Contenttechnology from '../components/componenttag/contenttechnology'

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



function Home () {
  return (
    <>
      <ShowCase>
          
          <Content__left>
          <TagContent/>

          </Content__left>

          <Content__center>
            <PostHome/>
            <Contenttechnology/>
            <Contenttechnology/>
            <Contenttechnology/>
            <Contenttechnology/>

          </Content__center>

          <Content__right>
            <ProfileHome/>
          </Content__right>
          
      </ShowCase>
    </>
  )
}
export default Home
