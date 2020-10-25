import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/index'
import TagContent from '../components/Tag/index'
import PostContent from '../components/PostContent/index'
import PostHome from '../components/PostHome/index'
import ProfileHome from '../components/ProfileHome/index'

const ShowCase = styled.div `

display: grid;
  grid-template-columns: 0.7fr 1.7fr 0.5fr;
  grid-template-rows: 1fr;
  gap: 0px 2em;
  grid-template-areas: ". . .";
  margin : 100px 20px 0 20px ;
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
            <PostContent></PostContent>
            <PostContent></PostContent>
            <PostContent></PostContent>
            <PostContent></PostContent>
          </Content__center>

          <Content__right>
            <ProfileHome/>
          </Content__right>
          
      </ShowCase>
      <Footer />
    </>
  )
}
export default Home
