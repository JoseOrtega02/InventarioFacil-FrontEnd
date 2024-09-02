import { useEffect, useState } from "react"
import { getSales } from "./Utils/SalesUtils"
import DeleteSale from "./Components/DeleteSale"
function Sales() {
  const [data, setData] = useState()
  useEffect(() => {
    getSales(setData)
  }, [])
  console.log(data)
  return (

    <div>

      <h1>Yor Sales</h1>
      <DeleteSale />
    </div>
  )
}

export default Sales
