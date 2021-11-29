import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';

const DadosEntrega = ({ enviarForm }) => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        enviarForm({ cep, endereco, numero, estado, cidade })
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        margin="normal"
        size="small"
        type="number"
        id="cep"
        label="CEP"
        variant="outlined"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
        type="text"
        margin="normal"
        size="small"
        fullWidth
        id="endereco"
        label="Endereço"
        variant="outlined"
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
        margin="normal"
        size="small"
        type="number"
        id="numero"
        label="Numero"
        variant="outlined"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
        margin="normal"
        size="small"
        type="text"
        id="estado"
        label="Estado"
        variant="outlined"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
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
