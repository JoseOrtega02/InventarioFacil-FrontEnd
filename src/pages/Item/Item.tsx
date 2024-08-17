import AddItem from "./component/AddItem"


function Item() {
    const tittle = "example"
    const tableId="aaaa"
  return (
    <>
        <h1>{tittle}</h1>
        <h2>Id:{tableId}</h2>
        <h2>table</h2>
        <AddItem/>


    </>
  )
}

export default Item