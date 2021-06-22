import React from 'react';

type CartProps = {
  totalPrice: number;
};
function Cart({ totalPrice }: CartProps): JSX.Element {
  return <div>Cart: {totalPrice.toFixed(2)}</div>;
}

export default Cart;
