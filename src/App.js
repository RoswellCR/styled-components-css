import React from 'react';
import styled from 'styled-components';
import './styles.css';
import {colorPrincipal} from './colors'

//variables completas
const borderGeneral = 'border-radius:0.9em;'

//variables dinamicas con funciones
const getLinearGradient = (rot)=>{
  return `background:linear-gradient(${rot},#db7093,#daa357);`
}

const Header = styled.header 
//background: var(--colorPrincipal);
`background:${colorPrincipal};
${getLinearGradient('50deg')}
text-align: center;
padding:0.3em;
margin:0.3em;
${borderGeneral}
` 

const Subtitle = styled.h1`
color: ${colorPrincipal};
`

function App() {
  return (
    
        <div>
          <Header>
          
           <h1>Styled component</h1>

          </Header>
          <Subtitle>
            Title example
          </Subtitle>
        </div>
    
  );
}

export default App;
