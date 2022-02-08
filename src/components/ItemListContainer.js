import React from 'react';
import Counter from './ItemCount';


export default function ItemListContainer() {
  return (
        <Counter stock={5} initial={1} />
  )
}