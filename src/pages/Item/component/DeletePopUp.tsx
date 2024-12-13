import { PrimaryButton } from '@/src/components/styledComponents/Buttons'
import { toast } from 'react-toastify'
import { Title } from '../../Login/components/inputComponents'
import { ButtonsContainer } from '../../Table/StyledComponents/Components'
import { ContainerPopUp, StyleForm } from './AddItem'
import { CancelButton } from '../../Table/Components/ConfirmationPopUp'
import { deleteItems } from '../utils/itemUtils'
interface props{
    idItem: string
    tableId:string
    reloadTable: Function
    closeFunction: () => void
}
function DeletePopUp({idItem,reloadTable,tableId,closeFunction}:props) {
  return (
    <ContainerPopUp>
        <div className={StyleForm}> 
<Title>You want to delete this Item?</Title>
<ButtonsContainer>
    <PrimaryButton onClick={closeFunction}>Cancel</PrimaryButton>
<CancelButton onClick={async ()=>{
    await toast.promise(deleteItems({ tableId, itemId: idItem }), {
              pending: 'Loading...',
              success: 'Item deleted successfully',
              error: 'Error deleting the item'
            })
            reloadTable()
            closeFunction()
          
}}>Delete</CancelButton>

</ButtonsContainer>
        </div>

    </ContainerPopUp>
  )
}

export default DeletePopUp