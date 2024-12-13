import { useEffect, useMemo, useState } from "react"
import { getSales } from "./Utils/SalesUtils"
import { TitleBlack } from "@/src/components/styledComponents/Texts"
import ChartsContainer from "./Components/ChartsContainer"
import { barsData, getItemSalesForPieChart, RawData } from "./Utils/CalculateStats"

function Sales() {
  const [data, setData] = useState<RawData>()
  useEffect(() => {
    getSales(setData)
  }, [])
  const barData= useMemo(()=> barsData(data),[data])
  const pieData = useMemo(()=> getItemSalesForPieChart(data),[data])
  return (

    <div>

      <TitleBlack>Your Sales:</TitleBlack>
      <ChartsContainer barData={barData} pieData={pieData} />
    </div>
  )
}

export default Sales
