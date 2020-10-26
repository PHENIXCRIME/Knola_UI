import styled from 'styled-components'

export const TagName = styled.div `
 display : grid ;
 grid-template-columns : repeat(3,0.5fr) ;
 grid-gap : 3px ;
 box-shadow : 3px 3px 3px #bdc3c7 ;
 background-color : white ;
 border-radius : 20px ;
`


export const TagAll = styled.button `
  display: flex;
  justify-content: center;
  text-align : center ;
  font-size : 15px ;
  position : relative ;
  border-radius : 10px;
  padding : 30px ; 
  margin : 30px ; 
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

 :hover::before{
  left:100% ;
 }
`
