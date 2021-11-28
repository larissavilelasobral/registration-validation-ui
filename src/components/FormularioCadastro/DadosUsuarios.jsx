import React from 'react'
import { TextField, Button } from '@material-ui/core';

const DadosUsuarios = () => {
  return (
    <>
      <TextField
        margin="normal"
        size="small"
        fullWidth
        type="email"
        id="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        margin="normal"
        size="small"
        fullWidth
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
    </>
  )
}

export default DadosUsuarios
