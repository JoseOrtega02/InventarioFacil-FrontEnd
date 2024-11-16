import { ReactEChartsProps, ReactECharts } from "./ReactECharts"
interface props {
  barsData: object,
  pieData: object
}
function ChartsContainer() {
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
      type: "category",
      data: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ], // Months of the year
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Owned",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)), // Randomized total sales for 'Owned'
        type: "bar",
      },
      {
        name: "Financed",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 800)), // Randomized total sales for 'Financed'
        type: "bar",
      },
    ],
  };
  const pieOption: ReactEChartsProps["option"] = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Item Distribution",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <>

      <ReactECharts option={option} />
      <ReactECharts option={pieOption} />
    </>
  )
}

export default ChartsContainer
