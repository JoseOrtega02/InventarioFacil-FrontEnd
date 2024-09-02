import { create } from "zustand"
import { persist } from "zustand/middleware"
// modularize this
export interface ItemInterface {
  itemId: string,
  quantity: number,
  tableId: string
}
interface SaleState {
  items: ItemInterface[],
  addItem: (by: ItemInterface) => void
}
export const useSaleStore = create<SaleState>()(persist((set, get) => ({
  items: [],
  addItem: (by) => set(() => ({ items: [...get().items, by] }))
}), {
  name: "sale-storage"
}))
