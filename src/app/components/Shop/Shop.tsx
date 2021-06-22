import React from 'react';
import Item from '../Item/Item';

function Shop(): JSX.Element {
  return (
    <div>
      <h2>SHOP</h2>

      <Item name="Monitor" price={2.52} />
      <Item name="Kaugummi" price={1.5555} />
      <Item name="PC" price={222.5} />
      <Item name="Impfpass" price={99.2} />
    </div>
  );
}

export default Shop;
