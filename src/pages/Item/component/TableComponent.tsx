import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
  ICellRendererParams,
} from "@ag-grid-community/core";
import { useEffect, useState } from 'react';
import { ColDef } from "ag-grid-community";
import { myTheme } from './TableTheme';
import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { deleteItems } from '../utils/itemUtils';
import { Item, UpdatePopUpItem } from './UpdatePopUpItem';
import { itemAdapter } from '@/src/utils/Adapters/ItemAdapters';
import { useSaleStore } from '../../zustand/itemsSalesState';



function CustomButton(props: ICellRendererParams) {
  const [isOpen, setIsOpen] = useState(false);
  const tableId= props.context.tableId
  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };
const addItem = useSaleStore((state)=> state.addItem)
  const itemData: Item = props.data || { stock: 0, price: 0, name: "", id: ""};

  

  return (
  <div style={{ display: 'flex', flexDirection: "row", gap: "8px", justifyContent: "center", alignItems: "center", height: "100%" }}>
    <PrimaryButton onClick={() => { togglePopover }}>Update</PrimaryButton>

    {isOpen && (<UpdatePopUpItem item={itemData} tableId={tableId} />)}

    <PrimaryButton onClick={async () => {
        await deleteItems({ tableId: tableId, itemId: itemData.id })
      }}>Delete</PrimaryButton>

    <PrimaryButton onClick={() => {
        const saleBody = {
          tableId: tableId,
          quantity: 1,
          itemId: itemData.id,
          name: itemData.name,
          price: itemData.price
        }
        addItem(saleBody)
      }}>Add to sale</PrimaryButton>

  </div>)
}

interface Props{
  items: {
    name: string,
  price: number,
  stock: number,
  _id: string,
  __v:number
  }[]
  tableId:string
}
function TableComponent({tableId,items}:Props) {
  const [rowData, setRowData] = useState<Item[] | undefined>();
  console.log(rowData)
  useEffect(()=>{
    const itemsConverter=()=>{
      const newItems:Item[]=[]
      items.map((itemRaw) => {
        const item = itemAdapter(itemRaw)
        newItems.push(item)
    })
    setRowData(newItems)
  }
  itemsConverter()
  },[])
  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<Item>[]>([
    { field: 'name' },
    { field: 'price' },
    {field:"stock"},
    { field: 'id',headerName:"options", cellRenderer: CustomButton, pinned: "right", width: 370 },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };
  const context = {tableId:tableId}
  return (
    <div
      style={{ height: 350, padding: "0px 12px" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        theme={myTheme}
        context={context}
      />
    </div>
  )
}

export default TableComponent
