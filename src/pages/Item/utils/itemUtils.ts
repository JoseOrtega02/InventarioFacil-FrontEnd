import { handleFetchErrors } from "../../../utils/utils";
import { Table } from "../Item";
import { AddItemType } from "../YupSchemas/ItemYupSchema";
import Cookies from "js-cookie";
const backendURL = import.meta.env.VITE_BACKEND_URL
export const postItems = async (values: AddItemType[], tableId: string | undefined) => {
  const csrfToken = Cookies.get("x-csrf-token")?.toString()
  const body = JSON.stringify({
    tableId: tableId,
    items: values
  })
  await fetch(backendURL + "/table/item", {
    method: "POST", body: body, headers: {
      'Content-Type': 'application/json',
      "x-csrf-token": csrfToken || ""
    }, credentials: "include"
  })
    .then(handleFetchErrors)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => {
      if (error instanceof TypeError) {
        console.error("Network error: " + error)
      } else {
        console.error("error: " + error)
      }
    })
}
export const getItems = async (id: string | undefined, setTable: React.Dispatch<React.SetStateAction<Table>>) => {

  const csrfToken = Cookies.get("x-csrf-token")?.toString()
  await fetch(backendURL + "/table/item/" + id, {
    method: "GET", headers: {
      'Content-Type': 'application/json',
      "x-csrf-token": csrfToken || ""
    }, credentials: "include"
  })
    .then(handleFetchErrors)
    .then(res => res.json())
    .then(data => setTable(data))
    .catch(error => {
      if (error instanceof TypeError) {
        console.error("error Network: " + error)
      } else {
        console.error("Error: " + error)
      }
    })
}
interface dataUpdate {
  tableId: string,
  itemId: string,
  newItem: {
    stock: number,
    price: number,
    name: string
  }
}
export const updateItems = async (data: dataUpdate) => {
  const csrfToken = Cookies.get("x-csrf-token")?.toString()
  const bodyReq = JSON.stringify(data)
  await fetch(backendURL + "/table/item", {
    method: "PUT", body: bodyReq, headers: {
      'Content-Type': 'application/json',
      'x-csrf-token': csrfToken || ""
    }, credentials: "include"
  })

    .then(handleFetchErrors)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => {
      if (error instanceof TypeError) {
        console.error("error Network: " + error)
      } else {
        console.error("Error: " + error)
      }
    })
}

interface DeleteItems {
  tableId: string,
  itemId: string
}
export const deleteItems = async (data: DeleteItems) => {
  const csrfToken = Cookies.get("x-csrf-token")
  const bodyReq = JSON.stringify(data)
  await fetch(backendURL + "/table/item", {
    method: "DELETE", body: bodyReq, headers: {
      'Content-Type': 'application/json',
      'x-csrf-token': csrfToken || ""
    }, credentials: "include"
  })
    .then(handleFetchErrors)
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch(error => {
      if (error instanceof TypeError) {
        console.error("error Network: " + error)
      } else {
        console.error("Error: " + error)
      }
    })
}
