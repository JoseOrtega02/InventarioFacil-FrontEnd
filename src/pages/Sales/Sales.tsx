import { useEffect, useState } from "react"
import { getSales } from "./Utils/SalesUtils"
import DeleteSale from "./Components/DeleteSale"
import { ReactECharts, ReactEChartsProps } from "./Components/ReactECharts"
const option: ReactEChartsProps["option"] = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Owned", "Financed"],
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}
function Sales() {
  const [data, setData] = useState()
  useEffect(() => {
    getSales(setData)
  }, [])
  console.log(data)
  return (

    <div>

      <h1>Yor Sales</h1>
      <ReactECharts option={option} />
      <DeleteSale />
    </div>
  )
}

export default Sales
