import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/index'
import TagContent from '../components/Tag/index'

const ShowCase = styled.div `

display: grid;
  grid-template-columns: 0.7fr 1.2fr 1fr;
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

          </Content__center>

          <Content__right>

          </Content__right>
      </ShowCase>
      
      <Footer />
    </>
  )
}
export default Home
