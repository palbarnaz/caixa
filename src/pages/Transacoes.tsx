import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../config/hooks';
import { adicionaTransacao, Transacao } from '../config/modules/transacoesSlice';



const Transacoes: React.FC = () => {
  const navigate = useNavigate()
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [valor, setValor] = useState(0);
  const dispatch = useAppDispatch()

 const cadastrarTransacao = ()=>{
   const transacao:Transacao = {
     descricao: descricao,
     tipo:tipo,
     valor:valor
   }

  
   dispatch(adicionaTransacao(transacao))
   
 }

  return (
    <React.Fragment>
      <h1>Cadastrar Transações</h1>
      <Button  variant="contained" onClick={()=>navigate('/')}>Ver Transacoes</Button>
      <Grid marginTop={2} container rowSpacing={2}>
        <Grid item sm={12}>
        <TextField id="descricao" value={descricao} onChange={(e)=>{setDescricao(e.target.value)}}  label="Descricao" name='descricao' variant="outlined"/>

        </Grid>


        <Grid item sm={12}>
            <FormControl sx={{width: '200px'}} >
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                     value={tipo}
                     onChange={(e)=>{setTipo(e.target.value)}}
                      label="Tipo" 
                     
                    >
                      <MenuItem value={'Entrada'}>Entrada</MenuItem>
                      <MenuItem value={'Saida'}>Saida</MenuItem>
                      
                    </Select>
            </FormControl>
        </Grid>


        <Grid item sm={12}>
        <TextField id="valor" label="valor" value={valor} onChange={(e)=>{setValor(Number(e.target.value))}} name='valor' variant="outlined"/>

        </Grid>


        <Grid item sm={12}>
        <Button onClick={()=>cadastrarTransacao()}  variant="contained" >Cadastrar</Button>

        </Grid>




      </Grid>
    </React.Fragment>
  );
};

export default Transacoes;
