import React from 'react'
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulario De Cadastro</Typography>
      
      <FormularioCadastro />
    </Container>
  );
}

export default App;
