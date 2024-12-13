import { ItemInterface } from "./ItemInterface";

export interface tableInterface {
  _id: string;
  owner: string;
  tableName: string;
  items: ItemInterface[];
  __v: number;
}

