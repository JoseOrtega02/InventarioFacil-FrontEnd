import { handleFetchErrors } from "../../../utils/utils"
import Cookies from "js-cookie"
const url = import.meta.env.VITE_BACKEND_URL

export const getSales = async () => {
  await fetch(url + "/sale", {
    method: "GET", headers: {
      'Content-Type': 'application/json',
    }, credentials: "include"
  })
    .then(handleFetchErrors)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err instanceof TypeError) {
        console.log("Network error: " + err)
      }
      else {
        console.error(err)
      }
    })
}


interface postInterface {
  saleItems: {
    tableId: string,
    itemId: string,
    quantity: number
  }[]
}
export const postSale = async (data: postInterface) => {
  const csrfToken = Cookies.get("x-csrf-token")?.toString()
  await fetch(url + "/sale", {
    method: "POST", body: JSON.stringify(data), headers: {
      'x-csrf-token': csrfToken || "",
      'Content-Type': 'application/json',
    }, credentials: "include"
  })
    .then(handleFetchErrors)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err instanceof TypeError) {
        console.log("Network error: " + err)
      }
      else {
        console.error(err)
      }
    })
}

export const deleteSales = async () => {
  await fetch(url + "/sales", {
    method: "GET", headers: {
      'Content-Type': 'application/json',
    }, credentials: "include"
  })
    .then(handleFetchErrors)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err instanceof TypeError) {
        console.log("Network error: " + err)
      }
      else {
        console.error(err)
      }
    })
}
