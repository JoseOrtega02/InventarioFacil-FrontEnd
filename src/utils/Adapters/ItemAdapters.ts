interface ItemInterface {
  _id: string,
  name: string,
  stock: number,
  price: number
}
export const itemAdapter = (item: ItemInterface) => {
  const newItem = {
    itemId: item._id,
    name: item.name,
    stock: item.stock,
    price: item.price
  }
  return newItem
}

