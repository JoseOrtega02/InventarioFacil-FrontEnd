interface Props {
  name: string,
  stock: number,
  price: number
}
function ItemComponent(data: Props) {
  return (
    <>
      <h3>{data.name}</h3>
      <h3>{data.stock}</h3>
      <h3>{data.price}</h3>
      <button>Update</button>
    </>
  )
}

export default ItemComponent
