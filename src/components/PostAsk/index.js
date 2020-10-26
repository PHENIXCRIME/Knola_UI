import React,{useState,useContext} from 'react'
import styled from 'styled-components'
import image1 from '../../assets/flame-1236.png'
import PostAPI from '../../services/PostAPI'
import {LoginContextWrapper} from '../../contexts/LoginContext'

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
  margin : 10% ;
  height : 500px ;
`
const ContentLeft = styled.div `
  border : 5px solid #3b3b3b ;
  width : 30% ;
  border-radius : 20px ;
  background : white ;
  margin : 10px ;
  padding : 10px ;
  
`
const ContentRight = styled.div `
  border : 5px solid #3b3b3b ;
  width : 70% ;
  display : flex ; 
  flex-direction : column ;
  justify-content : space-around ;
  background : white ;
  border-radius : 20px ;
  margin : 10px  ;
  padding : 10px ;

`

const Image = styled.div `
background-image : url(${image1}) ;
background-repeat : no-repeat ;
background-size : contain ;
width : 550px ;
height : 550px ;
align-items : center ;
margin-top : 60px ;

`

const BoxImage = styled.div `
      display: flex;
    justify-content: center;
`

const Head = styled.div `
  text-align : center ;
  padding : 4% ;
  font-size : 30px ;
  p{
    font-weight : bold ;
    font-size : 45px ;
  }
`
const Tag = styled.div `
  display: flex;
  padding: 0 50px;
  margin-bottom : 20px;
  p{
    width: 30%;
    font-size : 30px ;
    font-weight : bold ;
  }
`

const Question = styled.div `
  display: flex;
  padding: 0 50px;
  p{
    font-size : 30px ;
    width: 30%;
    font-weight : bold ;
  }
  `

const FillQuestion =styled.input `
  width : 50% ;
  border: 2px solid gray;
  border-radius: 10px;
  height : 40px ;
  font-size : 20px ;
  outline : none ;
  margin-bottom : 20px;

`
const Description = styled.div `
  display: flex;
  padding: 0 50px;
  p{
    font-size : 30px ;
    width: 30%;
    font-weight : bold ;
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
  font-weight : bold ;
  margin :4%;
  
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
  const {isLogin,setIsLogin,username,setUsername,loginUser, setLoginUser,id}= useContext(LoginContextWrapper)


  const [values, setValues] = useState({
    title:'',
    content:'',
    tag_id:'',
    user_id: id
    
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(id)
    if(isLogin) {
      PostAPI(values)
    }
  };

  

  return (
  <form onSubmit={handleSubmit} className='form' noValidate>
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
                <Optiontag onChange={handleChange} value={values.tag_id = 1}>Math</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 2}>Science</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 3}>Social</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 4}>Language</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 5}>Human</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 6}>Teachnology</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 7}>Politics</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 8}>Food</Optiontag>
                <Optiontag onChange={handleChange} value={values.tag_id = 9}>Travel</Optiontag>
            </ButtonInputCatagorise>
            </Tag>

            <Question>
              <p>Question</p>
              <FillQuestion name='title' value={values.title} onChange={handleChange} />
            </Question>

            <Description>
              <p>Description</p>
              <FillDescription name='content' value={values.content} onChange={handleChange} />
            </Description>

            <Button>
              <Answer type='submit'>Submit</Answer>
            </Button>
            
        

          </ContentRight> 
        
    </Content>
  </form>
  )
}
export default PostAsk