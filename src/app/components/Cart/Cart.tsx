import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

function Cart(): JSX.Element {
  const { totalPrice } = useContext(CartContext);
  return <div>Cart: {totalPrice.toFixed(2)}€</div>;
}

export default Cart;
