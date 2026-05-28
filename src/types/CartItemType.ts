import type { Product } from "./productType";

export type CartItem = Product & { quantity: number };
