import type { Action } from "../types/ActionType";
import type { State } from "../types/StateType";

export function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.cart.find((item) => item.id === action.payload.id);

      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT":
      return {
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREMENT":
      return {
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
}
