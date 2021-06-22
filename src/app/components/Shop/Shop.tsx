import React from 'react';
import Item from '../Item/Item';

type ShopProps = {
  onItemBuy: (price: number) => void;
};
function Shop({ onItemBuy }: ShopProps): JSX.Element {
  return (
    <div>
      <h2>SHOP</h2>

      <Item name="Monitor" price={2.52} onClick={onItemBuy} />
      <Item name="Kaugummi" price={1.5555} onClick={onItemBuy} />
      <Item name="PC" price={222.5} onClick={onItemBuy} />
      <Item name="Impfpass" price={99.2} onClick={onItemBuy} />
    </div>
  );
}

export default Shop;
