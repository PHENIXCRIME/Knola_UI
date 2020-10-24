import styled from 'styled-components'

export const TagName = styled.div `
 display : grid ;
 grid-template-columns : repeat(3,1fr) ;
 grid-gap : 5px ;
`


export const TagAll = styled.button `
border : #333 1px solid ; 
border-radius : 10px;
padding : 1em ; 
text-align : center ;

 position : relative ; 
 padding : 15px 30px ; 
 margin : 10px ; 
 background-color: #27022d ;
 color : #fff ;
 text-decoration : none ;
 letter-spacing : 1px ; 
 border : 1px solid #000 ;
 transition : 0.5s;
 overflow:hidden;
 display: flex;
 justify-content: center;

 :hover{
   background:#a41ee9 ;
 }

 ::before { 
   content : '' ;
   position : absolute ; 
   top :0;
   left: -100%;
   width:100%; 
   height:100%;
   background : linear-gradient(90deg,transparent,#fff,transparent);
   transition:0.5s;
 }

 :hover::before{
  left:100% ;
 }
`
