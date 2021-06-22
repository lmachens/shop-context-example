import React from 'react';

type ItemProps = {
  name: string;
  price: number;
  onClick: (price: number) => void;
};
function Item({ name, price, onClick }: ItemProps): JSX.Element {
  return (
    <article onClick={() => onClick(price)}>
      {name}: {price.toFixed(2)}€
    </article>
  );
}

export default Item;
