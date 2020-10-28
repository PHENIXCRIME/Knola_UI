import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

 html , body , #root {   
  overflow-x :hidden ;
  /* height : 100vh ; */
  width: 100vw;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px ; 
  scroll-behavior : smooth ;
  background: linear-gradient(155deg, rgba(103,178,111,1) 0%, rgba(76,162,205,1) 100%);
}

a { 
  text-decoration:none;
  color: inherit;
  font-size : 25px ;
}
`

export default GlobalStyle
