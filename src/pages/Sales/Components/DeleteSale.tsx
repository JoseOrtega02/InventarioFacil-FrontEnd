import { deleteSales } from "../Utils/SalesUtils"

function DeleteSale() {
  return (
    <button onClick={() => deleteSales()}>DeleteSale</button>
  )
}

export default DeleteSale
