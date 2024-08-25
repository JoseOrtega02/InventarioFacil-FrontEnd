export interface ItemInterface {
  _id: string,
  name: string,
  stock: number,
  price: number
  __v: number
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

