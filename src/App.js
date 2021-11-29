import React from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core'
import { validarCPF, validarSenha } from './components/models/cadastro';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" align="center" component="h1">Formulario De Cadastro</Typography>
      <FormularioCadastro enviarForm={enviarForm} validacoes={{cpf: validarCPF, validarSenha}} />
    </Container>
  );
}
function enviarForm(dados) {
  console.log(dados)
}



export default App;
