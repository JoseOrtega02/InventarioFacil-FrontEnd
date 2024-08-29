
export interface Table {
  tableId: string;
  tableName: string;
  items: {
    name: string;
    stock: number;
    price: number;
    _id: string;
    __v: number;
  }[];
}

