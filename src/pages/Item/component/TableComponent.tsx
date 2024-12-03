import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
  ICellRendererParams,
} from "@ag-grid-community/core";
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ColDef } from "ag-grid-community";
import { myTheme } from './TableTheme';
import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { deleteItems } from '../utils/itemUtils';
import { Item } from './UpdatePopUpItem';
import { itemAdapter } from '@/src/utils/Adapters/ItemAdapters';
import { useSaleStore } from '../../zustand/itemsSalesState';
import { useParams } from 'react-router-dom';
import { DeleteButton, EditButton } from '../../Table/StyledComponents/Components';
import EditIcon from '@/src/components/styledComponents/EditIcon';
import DeleteIcon from '@/src/components/styledComponents/DeleteIcon';


interface Props {
  items: {
    name: string;
    price: number;
    stock: number;
    _id: string;
    __v: number;
  }[];
  tableId: string;
  setSelectedItem: Function;
 setOpen:Function;
}

function TableComponent({  items,setSelectedItem,setOpen }: Props) {
  const [rowData, setRowData] = useState<Item[] | undefined>();
  const [quickFilterText, setQuickFilterText] = useState<string>();
  const onFilterTextBoxChanged = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
      setQuickFilterText(value),
    []
  );
  const { id}= useParams()
const tableId = id || ""
  useEffect(() => {
    const itemsConverter = () => {
      const newItems: Item[] = [];
      items.map((itemRaw) => {
         const item = itemAdapter(itemRaw);
    
       
        newItems.push(item);
      });
      setRowData(newItems);
    };
    itemsConverter();
  }, [items]);


  const addItem = useSaleStore((state) => state.addItem);

  const CustomButton = (props: ICellRendererParams) => {
    const itemData: Item = props.data || { stock: 0, price: 0, name: "", id: "" };
    
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <PrimaryButton
          onClick={() => {
            const saleBody = {
              tableId: tableId,
              quantity: 1,
              itemId: itemData.id,
              name: itemData.name,
              price: itemData.price,
            };
            addItem(saleBody);
          }}
        >
          Add to sale
        </PrimaryButton>
        <EditButton onClick={() =>{
          setSelectedItem(itemData);
          setOpen()}}><EditIcon/></EditButton>

        <DeleteButton
          onClick={async () => {
            await deleteItems({ tableId, itemId: itemData.id });
          }}
        >
          <DeleteIcon/>
        </DeleteButton>

        

      </div>
    );
  };

  const [colDefs, setColDefs] = useState<ColDef<Item>[]>([
    { field: "name" },
    { field: "price" },
    { field: "stock" },
    {
      field: "id",
      headerName: "options",
      cellRenderer: CustomButton,
      pinned: "right",
      width: 540
    },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <div  style={{ height: 350, padding: "0px 12px" }}>
      <input type='text' placeholder="Search product..."
              onInput={onFilterTextBoxChanged} />
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        theme={myTheme}
        context={{ tableId }}
        quickFilterText={quickFilterText}
      />
    </div>
  );
}

export default TableComponent;
