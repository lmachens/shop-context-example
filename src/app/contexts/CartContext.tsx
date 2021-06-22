import React from 'react';

type CartContextValue = {
  totalPrice: number;
  buy: (price: number) => void;
};
export const CartContext = React.createContext<CartContextValue>({
  totalPrice: 0,
  buy: () => false,
});
