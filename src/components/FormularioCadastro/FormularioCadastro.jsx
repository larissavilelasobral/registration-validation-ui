import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuarios from './DadosUsuarios';
import './index.css'

function FormularioCadastro({ enviarForm, validacoes }) {
  // onSubmit={enviarForm} validarCPF={validarCPF}

  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length-1){
      enviarForm(dadosColetados)
    }
  })

  const formularios = [
    <DadosUsuarios enviarForm={coletarDados} validacoes={validacoes} />,
    <DadosPessoais enviarForm={coletarDados} validacoes={validacoes} />,
    <DadosEntrega enviarForm={coletarDados} validacoes={validacoes} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];
  function coletarDados(dados) {
    setDados({...dadosColetados, ...dados});
    
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual+1)
  }

  return (<>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>
  );
}

export default FormularioCadastro;