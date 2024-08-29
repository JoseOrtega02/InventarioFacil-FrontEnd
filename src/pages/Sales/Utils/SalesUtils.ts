import { handleFetchErrors } from "../../../utils/utils"

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
