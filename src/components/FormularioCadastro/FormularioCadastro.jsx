import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({nome, sobrenome, cpf, promocoes, novidades});
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
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          let tmpCpf = event.target.value;
          if (tmpCpf >= 11) {
            tmpCpf = tmpCpf.substr(0,11);
          }
          setCpf(tmpCpf);
        }}
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
        color="success">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;