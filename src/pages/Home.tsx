import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../config/hooks';



const Home: React.FC = () => {
  const navigate = useNavigate()
  const transacoes = useAppSelector((state)=>state.transacoes)

  useEffect(()=>{

    console.log(transacoes)
  },[])
  return (
    <React.Fragment>
      <h1>Minha Conta</h1>
      <Button variant="contained" onClick={()=>navigate('/transacoes')}>Cadastrar Transacoes</Button>
      

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>

          
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Valor</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        {transacoes.transacoes.map((transacao)=>{
            return(
              <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                 {transacao.descricao}
              </TableCell>
              <TableCell align="right">{transacao.tipo}</TableCell>
              <TableCell align="right">R$ {transacao.valor}</TableCell>
             
            </TableRow>
            )
          })}
            
     
        </TableBody>
        <TableRow>
            <TableCell>Saldo: {transacoes.saldo}</TableCell>
            
           
          </TableRow>
      </Table>
    </React.Fragment>
  );
};

export default Home;
