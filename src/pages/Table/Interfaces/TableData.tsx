import { ItemInterface } from "../../../utils/Adapters/ItemInterface";


export interface TableData {
  _id: string;
  owner: string;
  tableName: string;
  items: ItemInterface[];
  __v: number;
}

