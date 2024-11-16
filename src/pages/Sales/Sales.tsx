import { useEffect, useState } from "react"
import { getSales } from "./Utils/SalesUtils"
import DeleteSale from "./Components/DeleteSale"
import { ReactECharts, ReactEChartsProps } from "./Components/ReactECharts"
import { TitleBlack } from "@/src/components/styledComponents/Texts"
import ChartsContainer from "./Components/ChartsContainer"

function Sales() {
  const [data, setData] = useState()
  useEffect(() => {
    getSales(setData)
  }, [])
  console.log(data)
  return (

    <div>

      <TitleBlack>Your Sales</TitleBlack>
      <ChartsContainer />
      <DeleteSale />
    </div>
  )
}

export default Sales
