import DeleteIcon from '@/src/components/styledComponents/DeleteIcon';
import EditIcon from '@/src/components/styledComponents/EditIcon';
import { ItemInterface } from '@/src/utils/Adapters/Interfaces/ItemInterface';
import { Link } from 'react-router-dom';
import { TableItemContainer, TableButton, ButtonsContainer, EditButton, DeleteButton } from '../StyledComponents/Components';
import ConfirmationPopUp from './ConfirmationPopUp';
import { useState } from 'react';
import { ITable } from '../Table';
interface props{
  table:{
    _id:string,
    tableName:string,
    items:ItemInterface[] 
    __v: number;
    owner:string
  }
  reloadTables: Function
  setSelected: React.Dispatch<React.SetStateAction<ITable | undefined>>
togglePopover:Function
setTableUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

function TableComponent({table,reloadTables,setSelected,togglePopover,setTableUpdate}:props) {
  
  const [deletePopUp,setDeletePopUp] = useState<boolean>(false)
  
  return (
    <TableItemContainer>
               
              <Link to={`${table._id}`} key={table._id}><TableButton> {table.tableName}</TableButton></Link>
              <ButtonsContainer>
                <EditButton onClick={()=>{
                  setSelected(table)
                  togglePopover(setTableUpdate)
                }}><EditIcon/></EditButton>
               
                <DeleteButton onClick={()=>togglePopover(setDeletePopUp)}><DeleteIcon/></DeleteButton>
                {deletePopUp && <ConfirmationPopUp idTable={table._id} closeFunction={() => togglePopover(setDeletePopUp)} reloadTables={reloadTables} />}
              </ButtonsContainer>
            </TableItemContainer>
  )
}

export default TableComponent