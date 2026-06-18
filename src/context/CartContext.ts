import { createContext, type Dispatch } from "react";
import type { State } from "../types/StateType";
import type { Action } from "../types/ActionType";
import type { CartItem } from "../types/CartItemType";

export const initialState: State = {
  cart: [],
};

type CartContextType = {
  cart: CartItem[];
  dispatch: Dispatch<Action>;
};
export const CartContext = createContext<CartContextType | null>(null);
