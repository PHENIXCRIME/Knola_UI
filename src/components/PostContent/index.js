import React from 'react'
import styled from 'styled-components'

const Post = styled.div `
  margin-bottom : 100px ;
  box-shadow : 3px 3px 3px #bdc3c7 ;
  background-color : white ;
`
const Head = styled.div `
  padding : 10px ;
  border-bottom : 2px solid #bdc3c7 ;
  display : flex ; 
  flex-direction: column; 
  justify-content : space-around ;
`

const Email = styled.div `
  color : #2c3e50 ;
  padding : 5px ;
  background-color : white ;

  p {
    font-size : 12px ;
  }
  
`
const Name = styled.div `
  color : #2c3e50 ;
  padding : 5px ;
  background-color : white ;
  p {
    font-size : 18px ;
    font-weight : bold ;
  }
`

const Content = styled.div `
  padding : 5px ;

`
const Title = styled.div `
  padding : 10px ;
  text-align : left ;
  h3 { 
    font-size : 25px ;
    font-weight : bold ;
  }

`
const Description = styled.div `
  padding : 10px ;
  p{
    font-size : 15px ;
  }

`

const Images = styled.div `
width: 1031.72x;
height: 300px;
background-image: url(${props => props.src});
background-size: cover;
background-repeat: no-repeat;
background-position :center ;

/* border-radius: 10px 10px 0 0; */
transition: .5s ease;
&:hover{
opacity: 0.5;
}
`

function PostContent ({src,childern}) { 
  return (

    <Post>

      <Head>
        <Email>
          <p>Boatcharnchon@mail.com</p>
        </Email>
        <Name>
          <p>Boat Charnchon</p>
        </Name>
      </Head>

      <Content>
        
        <Title>
            <h3>What the problem politics in thailand?</h3>
        </Title>
        <Description>
            <p>There have been heavy protests in Thailand over the mouth of the people And the claims of human rights in Thailand</p>
        </Description>
        <Images src={src}>
          {childern}
        </Images>
      </Content>

    </Post>
  )
}

export default PostContent 