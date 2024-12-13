import { ItemInterface } from "@/src/utils/Adapters/Interfaces/ItemInterface";



export interface TableData {
  _id: string;
  owner: string;
  tableName: string;
  items: ItemInterface[];
  __v: number;
}

