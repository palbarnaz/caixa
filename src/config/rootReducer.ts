import { combineReducers } from "@reduxjs/toolkit";
import transacoesSlice from "./modules/transacoesSlice";


export const rootReducer = combineReducers(
  {
    transacoes: transacoesSlice
  }
)