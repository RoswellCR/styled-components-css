import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import './styles.css';
import {colorPrincipal} from './colors'

const GlobalStyle = createGlobalStyle`
body { ${ props => props.font };
  }
`

//variables completas
const borderGeneral = 'border-radius:0.9em;'

//variables dinamicas con funciones
const getLinearGradient = (rot)=>{
  return `background:linear-gradient(${rot},#db7093,#daa357);`
}

const sizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px'
}

const Header = styled.header 
//background: var(--colorPrincipal);
`background:${colorPrincipal};
${getLinearGradient('50deg')}
text-align: center;
padding:0.3em;
margin:0.3em;

${borderGeneral}
h1 { 
  color: blue;
}
.big{
  color: black;
  font-size: 30px;
}
transition: opacity 350ms ease-out;
&:hover{
  opacity:0.6;
}
@media(min-width:${sizes.mobile}){
 background: #000;
}
@media(min-width:${sizes.tablet}){
  background: blue;
  color: #fff
  }
@media(max-width:${sizes.desktop}){
  background: yellow;
  }
` 


function App() {
  return (
    
        <div>
          <GlobalStyle font='font-family : cursive'/>
          <Header>
          
           <h1>Styled component</h1>
            <h2 className='big'>Example</h2>
          </Header>
          
        </div>
    
  );
}

export default App;
