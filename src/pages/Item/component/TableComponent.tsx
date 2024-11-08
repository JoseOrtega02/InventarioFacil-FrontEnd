import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { useState } from 'react';
import { ColDef } from "ag-grid-community";
import { myTheme } from './TableTheme';
import { PrimaryButton } from '@/src/components/styledComponents/Buttons';
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}
const CustomButton = () => { return <PrimaryButton>More actions</PrimaryButton> }
function TableComponent() {
  const [rowData, setRowData] = useState<IRow[]>([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric', cellRenderer: CustomButton },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };
  return (
    <div
      style={{ height: 400, padding: "0px 12px" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        theme={myTheme}
      />
    </div>
  )
}

export default TableComponent
