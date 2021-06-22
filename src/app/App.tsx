import React, { useState } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App(): JSX.Element {
  const [totalPrice, setTotalPrice] = useState(0);

  function buy(price: number) {
    setTotalPrice(totalPrice + price);
  }

  return (
    <div>
      <AppHeader>
        <Cart totalPrice={totalPrice} />
      </AppHeader>
      <Shop onItemBuy={buy} />
    </div>
  );
}

export default App;
