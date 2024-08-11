import { useEffect, useState } from "react";
import CreateTable from "./Components/CreateTable"

interface TableData {
    _id: string;
    owner: string;
    tableName: string;
    items: string[];
  }
function Table() {
    const urlBackend= import.meta.env.VITE_BACKEND_URL
    const [tables,setTables] =useState<Array<TableData>>([])
    const fetchTables= async()=>{
        try{
            const response =await fetch(urlBackend+"/table",{method:"GET",credentials:"include"})
            if(response.ok){
                const result = await response.json();
                setTables(result)
            }else{
                console.log("failde to fetch")
            }
            
        }catch(error){
            if (error instanceof TypeError){
                console.error("Network shut down")
            }
            else{
                console.log("error:"+error)
            }
        }
        
    }
    useEffect(()=>{
         fetchTables()
    },[])
  return (
    <div>
        <CreateTable/>
        {tables && tables.length !== 0 ?(
        tables.map((table) => (
          <h3 key={table._id}>{table.tableName}</h3>
        ))
      ) : (
        "No tables"
      )}
    </div>
  )
}

export default Table