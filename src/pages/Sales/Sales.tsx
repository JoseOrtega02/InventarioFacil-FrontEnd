import { useEffect, useState } from "react"
import { getSales } from "./Utils/SalesUtils"
function Sales() {
  const [data, setData] = useState()
  useEffect(() => {
    getSales()
  }, [])
  return (

    <div>

      <h1>Yor Sales</h1>

    </div>
  )
}

export default Sales
