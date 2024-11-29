import { ReactEChartsProps } from "../Components/ReactECharts";

export const generateChartOptions = (barsData: Array<{ month: string; quantity: number; totalAmount: number }> | undefined): ReactEChartsProps["option"] => {
    // Create an array of months in order
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
  
    // Map month names to indices for proper sorting
    const monthData = barsData?.reduce((acc, entry) => {
      const dateParts = entry.month.split("-");
      const monthIndex = parseInt(dateParts[1], 10) - 1; // Convert month to index (0-11)
      acc[monthIndex] = {
        quantity: entry.quantity,
        totalAmount: entry.totalAmount,
      };
      return acc;
    }, Array(12).fill({ quantity: 0, totalAmount: 0 })); // Default values for all months
  
    // Prepare series data
    const quantities = monthData?.map((entry) => entry.quantity);
    const totalAmounts = monthData?.map((entry) => entry.totalAmount);
  
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Quantity", "Total Amount"],
      },
      xAxis: {
        type: "category",
        data: months, // Use full month names as labels
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Quantity",
          data: quantities, // Data for quantities
          type: "bar",
        },
        {
          name: "Total Amount",
          data: totalAmounts, // Data for total amounts
          type: "bar",
        },
      ],
    };
  };

  export const generatePieChartOptions = (pieData: Array<{ itemId: string; quantity: number }> | undefined): ReactEChartsProps["option"] => {
    return {
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
          data: pieData?.map((item) => ({
            value: item.quantity, // Use quantity as the value
            name: item.itemId,       // Use id as the name
          })), // Map pieData to match the expected format
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
  };