import React from 'react';
import { useBuy } from '../../contexts/CartContext';

type ItemProps = {
  name: string;
  price: number;
};
function Item({ name, price }: ItemProps): JSX.Element {
  const buy = useBuy();

  return (
    <article onClick={() => buy(price)}>
      {name}: {price.toFixed(2)}€
    </article>
  );
}

export default Item;
