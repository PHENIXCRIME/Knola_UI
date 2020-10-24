import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

 html , body , #root {   
  overflow-x :hidden ;
  width: 100vw;

  font-family: 'Kanit' , sans-serif ; 
  /* font-family: 'Pridi', serif; */
  font-size: 20px ; 

  scroll-behavior : smooth ;

  background-color : #99f2c8 ;
}

a { 
  text-decoration:none;
  color: inherit;
  font-size : 25px ;
}
`

export default GlobalStyle
