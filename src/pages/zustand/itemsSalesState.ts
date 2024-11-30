import { create } from "zustand"
import { persist } from "zustand/middleware"
// modularize this
export interface ItemInterface {
  itemId: string,
  price: number,
  name: string,
  quantity: number,
  tableId: string
}
interface SaleState {
  items: ItemInterface[],
  addItem: (item: ItemInterface) => void
  deleteItem: (by:string) => void
}
export const useSaleStore = create<SaleState>()(persist((set, get) => ({
  items: [],
  addItem: (item) =>  set(() => {
    const existingItems = get().items;
    const existingItemIndex = existingItems.findIndex(
      (existing) => existing.itemId === item.itemId
    );

    if (existingItemIndex !== -1) {
      // Si el ítem ya existe, incrementamos su cantidad
      const updatedItems = [...existingItems];
      updatedItems[existingItemIndex].quantity += item.quantity;
      return { items: updatedItems };
    }

    // Si no existe, agregamos el nuevo ítem
    return { items: [...existingItems, item] };
  }),
  deleteItem: (by)=>set(()=>({items: get().items.filter((item) => item.itemId !== by)}))
}), {
  name: "sale-storage"
}))
