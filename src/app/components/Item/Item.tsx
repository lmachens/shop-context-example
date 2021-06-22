import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

type ItemProps = {
  name: string;
  price: number;
};
function Item({ name, price }: ItemProps): JSX.Element {
  const { buy } = useContext(CartContext);

  return (
    <article onClick={() => buy(price)}>
      {name}: {price.toFixed(2)}€
    </article>
  );
}

export default Item;
