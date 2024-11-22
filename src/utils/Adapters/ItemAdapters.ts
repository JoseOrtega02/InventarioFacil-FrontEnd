import { ItemInterface } from "./Interfaces/ItemInterface"

export const itemAdapter = (item: ItemInterface) => {
  const newItem = {
    id: item._id,
    name: item.name,
    stock: item.stock,
    price: item.price
  }
  return newItem
}

