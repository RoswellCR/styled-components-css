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
` 
const Button = styled.button`
padding: 0.9em;
background-color:${(props)=>props.bg || 'black'};
border-radius: 0.6em;
color: #fff;
border: 0;
margin: 5px;
`

const Subtitle = styled.h1`
color: ${colorPrincipal};
`

function App() {
  return (
    
        <div>
          <Header>
          
           <h1>Styled component</h1>
            <h2 className='big'>Example</h2>
          </Header>
          <Subtitle>
            Title example
          </Subtitle>
          <Button>Boton 1 </Button>
          <Button bg='orangered'>Boton 1 </Button>
        </div>
    
  );
}

export default App;
