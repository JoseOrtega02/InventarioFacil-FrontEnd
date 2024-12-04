
import { Title } from "@/src/components/styledComponents/Texts";
import { ContainerPopUp, StyleForm } from "../../Item/component/AddItem";
import { ButtonsContainer } from "../StyledComponents/Components";
import { styled } from "@/styled-system/jsx";
import { PrimaryButton } from "@/src/components/styledComponents/Buttons";
import { deleteTable } from "../utils/tableUtils";
import { toast } from "react-toastify";

const CancelButton= styled.button`
padding: 14px 35px;
line-height: 12px;
height: min-content;
background-color: #B3261E;
border-radius:24px;
font-family:'PT Sans Narrow', sans-serif;
color: white;
&:hover{cursor:pointer;}
`
interface props{
    idTable: string,
    reloadTables:Function,
    closeFunction: () => void;
}

function ConfirmationPopUp({idTable,reloadTables,closeFunction}:props) {
  return (
    <ContainerPopUp>
        <div className={StyleForm}> 
<Title>You want to delete this table?</Title>
<ButtonsContainer>
    <PrimaryButton onClick={closeFunction}>Cancel</PrimaryButton>
<CancelButton onClick={async ()=>{
    await toast.promise(deleteTable({tableId:idTable}), {
      pending: 'Loading...',
      success: 'Table Deleted successfully',
      error: 'Error Deleting the table'
    })
    reloadTables()
    closeFunction()
}
}>Delete</CancelButton>

</ButtonsContainer>
        </div>

    </ContainerPopUp>
  )
}

export default ConfirmationPopUp