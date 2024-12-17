import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import {
  ICellRendererParams,
} from "@ag-grid-community/core";

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ColDef } from "ag-grid-community";
import { myTheme } from './TableTheme';
import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
import { Item } from './UpdatePopUpItem';
import { itemAdapter } from '@/src/utils/Adapters/ItemAdapters';
import { useSaleStore } from '../../zustand/itemsSalesState';
import { useParams } from 'react-router-dom';
import { DeleteButton, EditButton } from '../../Table/StyledComponents/Components';
import EditIcon from '@/src/components/styledComponents/EditIcon';
import DeleteIcon from '@/src/components/styledComponents/DeleteIcon';
import { toast } from 'react-toastify';
import { InputContainer, TextInput } from '../../Table/Components/CreateTable';


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
 setDeletePopUp: Function
}

function TableComponent({  items,setSelectedItem,setOpen,setDeletePopUp }: Props) {
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
            toast.success("Added Successfully")
          }}
        >
          Add to sale
        </PrimaryButton>
        <EditButton onClick={() =>{
          setSelectedItem(itemData);
          setOpen()}}><EditIcon/></EditButton>

        <DeleteButton
          onClick={async () => {
            setSelectedItem(itemData)
            setDeletePopUp(true)
          }}
        >
          <DeleteIcon/>
        </DeleteButton>

        

      </div>
    );
  };

  const [colDefs] = useState<ColDef<Item>[]>([
    { field: "name",width:120,pinned:"left" },
    { field: "price",width:80 },
    { field: "stock",width: 80 },
    {
      field: "id",
      headerName: "options",
      cellRenderer: CustomButton,
      pinned: "right",
      width: 300
    },
  ]);

  

  return (
    <div  style={{ height: 350,width:"100%", padding: "0px 12px" }}>
      <InputContainer>
      <TextInput type='text' placeholder="Search product..."
              onInput={onFilterTextBoxChanged}/>
      </InputContainer>
      <div style={{width:"100%",height:"100%"}}>
        <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        
        theme={myTheme}
        context={{ tableId }}
        quickFilterText={quickFilterText}
        gridOptions={{
          alwaysShowHorizontalScroll:true
        }}
      />
      </div>
      
    </div>
  );
}

export default TableComponent;
