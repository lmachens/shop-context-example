import React, { useContext, useState } from 'react';

type CartContextValue = {
  totalPrice: number;
  buy: (price: number) => void;
};
export const CartContext = React.createContext<CartContextValue>({
  totalPrice: 0,
  buy: () => undefined,
});

type CartContextProviderProps = {
  children: React.ReactNode;
};
export function CartContextProvider({
  children,
}: CartContextProviderProps): JSX.Element {
  const [totalPrice, setTotalPrice] = useState(0);

  function buy(price: number) {
    setTotalPrice(totalPrice + price);
  }

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        buy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useTotalPrice(): number {
  const { totalPrice } = useContext(CartContext);
  return totalPrice;
}

export function useBuy(): (price: number) => void {
  const { buy } = useContext(CartContext);
  return buy;
}
