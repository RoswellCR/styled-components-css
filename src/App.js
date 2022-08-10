import React from 'react';
import styled,{css} from 'styled-components';
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
h1 { 
  color: blue;
}
` 
const baseStyles = css`
padding: 1em 2em;
margin: 1em;
border: 2px solid black;
border: ${(props)=>`2px solid ${props.borderColor}`}
`
const Button = styled.button`
${baseStyles}
`
const GreenButton= styled.button`
${baseStyles}
border:2px solid green;
`

function App() {
  return (
    
        <div>
          
          <Header>
          
           <h1>Styled component</h1>
            
          </Header>
          
          <Button> Dispara </Button>
          <Button borderColor='red'> Shoot </Button>
        </div>
    
  );
}

export default App;
