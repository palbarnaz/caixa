import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Transacao {
  descricao: string,
  tipo: "Entrada" | "Saida",
  valor: number
}


export interface ContaBancaria {
   saldo: number,
   transacoes:  Transacao[]
}



const initialState: ContaBancaria = {
  saldo: 50,
  transacoes: [
    {
      descricao: "valor 1 ",
      tipo: "Entrada",
      valor: 100
    },
    {
      descricao: "valor 2 ",
      tipo: "Saida",
      valor: 50
    }
  ]
}



export const transacoesSlice = createSlice({
  name: 'transacoes',
  initialState: initialState ,
  reducers:{
    adicionaTransacao:(state, action: PayloadAction<Transacao> )=>{
        state.transacoes.push(action.payload)

        if(action.payload.tipo === "Saida"){
          state.saldo -= action.payload.valor
        }else{
          state.saldo += action.payload.valor
        }
    }
  }
})

export const {adicionaTransacao} = transacoesSlice.actions
export default transacoesSlice.reducer