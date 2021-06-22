import React, { useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import { CartContext } from './contexts/CartContext';

function App(): JSX.Element {
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
      <div>
        <AppHeader>
          <Cart />
        </AppHeader>
        <Shop />
      </div>
    </CartContext.Provider>
  );
}

export default App;
