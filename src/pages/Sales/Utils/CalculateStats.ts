interface Item {
    tableId: string;
    itemId: string;
    quantity: number;
    name:string;
    price: number;
    _id: string;
  }
  
  interface Sale {
    date: string; // ISO 8601 format date string
    items: Item[];
    totalAmount: number;
    _id: string;
  }
  
 export interface RawData {
    owner: string;
    sales: Sale[];
    __v: number;
    _id: string;
  }

  export const barsData = (rawData: RawData | undefined) => {
    const response = rawData?.sales.reduce((acc, sale) => {
      const saleMonth = new Date(sale.date).toISOString().slice(0, 7); // Extract year and month in YYYY-MM format
      const existingMonthEntry = acc.find((entry) => entry.month === saleMonth);
  
      // Calculate the total items sold in the sale
      const itemsSold = sale.items.reduce((sum, item) => sum + item.quantity, 0);
  
      if (existingMonthEntry) {
        existingMonthEntry.quantity += itemsSold; // Increment total items sold
        existingMonthEntry.totalAmount += sale.totalAmount; // Add to total amount
      } else {
        // Add new month entry
        acc.push({
          month: saleMonth,
          quantity: itemsSold, // Initialize with items sold
          totalAmount: sale.totalAmount,
        });
      }
  
      return acc;
    }, [] as Array<{ month: string; quantity: number; totalAmount: number }>);
  
    return response;
  };

  export const getItemSalesForPieChart = (rawData: RawData|undefined) => {
    const itemSales = rawData?.sales.reduce((acc, sale) => {
      sale.items.forEach((item) => {
        const existingItem = acc.find((entry) => entry.itemId === item.itemId);
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          acc.push({
            name: item.name,
            itemId:item.itemId,
            quantity: item.quantity,
          });
        }
      });
      return acc;
    }, [] as Array<{ name: string;itemId:string; quantity: number }>);
  
    return itemSales;
  };