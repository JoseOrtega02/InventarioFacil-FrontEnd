import { useParams } from "react-router-dom"
import AddItem from "./component/AddItem"
import { useEffect, useState } from "react"
import { getItems } from "./utils/itemUtils"

export interface Table{
  tableId: string,
  title: string,
  items: object[]
}

function Item() {
    const {id}=useParams() 
    const [table,setTable]= useState<Table>({
      tableId:"",
      title:"",
      items:[]
    })
    useEffect(()=>{
      getItems(id,setTable)
    },[])
  return (
    <>
        <h1>{table?.title}</h1>
        <h2>Id:{id}</h2>
        <h2>table</h2>
        <AddItem/>
    </>
  )
}

export default Item