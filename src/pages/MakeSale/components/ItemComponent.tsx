import React from 'react'
interface props {
  item: {
    name: string,
    price: number,
    quantity: number,
    itemId: string,
    tableId: string
  }
}
function ItemComponent({ item }: props) {
  return (
    <div>
      <h4>{item.name}</h4>
      <h4>{item.price}</h4>
      <h4>{item.quantity}</h4>
      <button>more options</button>
    </div>
  )
}

export default ItemComponent
