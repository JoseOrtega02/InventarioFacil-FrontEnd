import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ItemInterface {
  itemId: string,
  quantity: number,
  tableId: string
}
interface SaleState {
  items: ItemInterface[],
  addItem: (by: ItemInterface) => void
}
const useSaleStore = create<SaleState>()(persist((set, get) => ({
  items: [],
  addItem: (by) => set(() => ({ items: [...get().items, by] }))
}), {
  name: "sale-storage"
}))
