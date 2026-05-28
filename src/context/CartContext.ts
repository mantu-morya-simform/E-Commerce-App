import { createContext } from "react";
import type { State } from "../types/StateType";

export const initialState: State = {
  cart: [],
};

export const CartContext = createContext(null);
