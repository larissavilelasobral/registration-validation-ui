import React from 'react'
import { TextField, Button } from '@material-ui/core';

const DadosEntrega = () => {
  return (
    <form>
      <TextField
        margin="normal"
        size="small"
        type="number"
        id="cep"
        label="CEP"
        variant="outlined"
      />
      <TextField
        type="text"
        margin="normal"
        size="small"
        fullWidth
        id="endereco"
        label="Endereço"
        variant="outlined"
      />
      <TextField
        margin="normal"
        size="small"
        type="number"
        id="numero"
        label="Numero"
        variant="outlined"
      />
      <TextField
        margin="normal"
        size="small"
        type="text"
        id="estado"
        label="Estado"
        variant="outlined"
      />
      <TextField
        margin="normal"
        size="small"
        type="text"
        id="cidade"
        label="Cidade"
        variant="outlined"
      />
      <Button
        type="submit"
        fullWidth
        size="small"
        variant="contained"
        color="primary">
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega;
