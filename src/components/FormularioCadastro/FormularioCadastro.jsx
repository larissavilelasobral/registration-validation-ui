import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';
import './index.css'

function FormularioCadastro({ enviarForm, validarCPF }) {
  // onSubmit={enviarForm} validarCPF={validarCPF}

  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapaAtual) {
    switch (etapaAtual) {
      case 0:
        return <DadosUsuarios />;
      case 1:
        return <DadosPessoais enviarForm={enviarForm} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro ao selecionar Formulario</Typography>;
    }
  }
  return (
    <>
      {formularioAtual(etapaAtual)}
    </>
  );
}

export default FormularioCadastro;