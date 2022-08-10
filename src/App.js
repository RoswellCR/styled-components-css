import React from 'react';
import styled,{keyframes} from 'styled-components';
import './styles.css';
import {colorPrincipal} from './colors'


const Anima = keyframes`  
from {
  background: #000;
}
to {
  background: #db7093;
}
`

const Header = styled.header 
//background: var(--colorPrincipal);
`background:${colorPrincipal};
text-align: center;
padding:0.3em;
margin:0.3em;
animation: ${Anima} 2ms ease-in-out infinite;
`


function App() {
  return (
    
        <div>
          
          <Header>
          
           <h1>Styled component</h1>
            
          </Header>
          
        </div>
    
  );
}

export default App;
