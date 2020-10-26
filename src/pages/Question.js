import React from 'react'
import styled from 'styled-components'
import ProfileHome from '../components/ProfileHome/index'
import PostHome from '../components/PostHome/index'
import Question from '../components/Question/index'

const Mainask = styled.div`
  height: 100vh;
  width: 100%;
`
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
    <Mainask>

      <ShowCase>
          <Content__left>
            
          </Content__left>

          <Content__center>
            <PostHome
            email ="boat@mail.com"
            name ="Boat charchon"/>
            <Question
            title = "What the problem politics in thailand?"
            description ="There have been heavy protests in Thailand over the mouth of the people " 
            comment = " jebjvbkjrbvlerbsi."
            />
            
          </Content__center>

          <Content__right>
          <ProfileHome
              email ="boat@mail.com"
              name ="Boat charchon"/>
          </Content__right>
          
      </ShowCase>
    </Mainask>

    </>
  )
}
export default Home
