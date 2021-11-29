import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';

const DadosUsuarios = ({ enviarForm }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviarForm({email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        margin="normal"
        size="small"
        fullWidth
        required
        type="email"
        id="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
        margin="normal"
        size="small"
        fullWidth
        required
        autoComplete="on"
        type="password"
        id="password"
        label="Senha"
        variant="outlined"
      />
      <Button
        type="submit"
        size="small"
        variant="contained"
        color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuarios
