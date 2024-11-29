import { generateChartOptions, generatePieChartOptions } from "../Utils/ChartsOptions";
import { ReactEChartsProps, ReactECharts } from "./ReactECharts"
interface props {
  barData: Array<{ month: string; quantity: number; totalAmount: number }> | undefined ,
  pieData: Array<{itemId:string,quantity:number}> | undefined
}
function ChartsContainer({barData,pieData}:props) {
  const option = generateChartOptions(barData)

  const pieOption = generatePieChartOptions(pieData)
  return (
    <>
{option|| pieOption  ?(<>
  <ReactECharts option={option} />
<ReactECharts option={pieOption} /></>):(<>Error in the data</>)}
      
      
    </>
  )
}

export default ChartsContainer
