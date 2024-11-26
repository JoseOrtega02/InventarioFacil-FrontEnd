import { useEffect, useMemo, useState } from "react"
import { getSales } from "./Utils/SalesUtils"
import DeleteSale from "./Components/DeleteSale"
import { ReactECharts, ReactEChartsProps } from "./Components/ReactECharts"
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
  console.log(barData)
  console.log(pieData)
  return (

    <div>

      <TitleBlack>Your Sales:</TitleBlack>
      <ChartsContainer />
      <DeleteSale />
    </div>
  )
}

export default Sales
