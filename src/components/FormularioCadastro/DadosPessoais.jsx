import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';

function DadosPessoais({ enviarForm, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  function validarCampos(event) {
    const {name, value} = event.target;
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  return (
    <form
    onSubmit={(event) => {
        event.preventDefault();
        // props.onSubmit({nome, sobrenome, cpf, promocoes, novidades})
        enviarForm({ nome, sobrenome, cpf, promocoes, novidades })
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        margin="normal"
        size="small"
        fullWidth
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        margin="normal"
        size="small"
        fullWidth
        name="sobrenome"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          let tmpCpf = event.target.value;
          // if (tmpCpf >= 11) {
          //   tmpCpf = tmpCpf.substr(0,11);
          // }
          setCpf(tmpCpf);
        }}
        onBlur={validarCampos}
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        margin="normal"
        size="small"
        fullWidth
        id="cpf"
        label="CPF"
        variant="outlined"
      />

      <FormControlLabel
        checked={promocoes}
        onChange={(event) => {
          setPromocoes(event.target.checked)
        }}
        control={
          <Switch
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        checked={novidades}
        onChange={(event) => {
          setNovidades(event.target.checked)
        }}
        control={
          <Switch
          />
        }
        label="Novidades"
      />

      <Button
        type="submit"
        size="small"
        variant="contained"
        color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;