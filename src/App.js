import React from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core'
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" align="center" component="h1">Formulario De Cadastro</Typography>
      <FormularioCadastro onSubmit={enviarForm} validarCPF={validarCPF} />
    </Container>
  );
}
function enviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf){
  if (cpf.length !== 11) {
    return {valido:false, texto: "CPF deve ter 11 digitos"}
  } else {
    return {valido:true, texto: ""}
  }
}

export default App;
