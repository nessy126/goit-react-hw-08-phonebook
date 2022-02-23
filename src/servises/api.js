import axios from "axios"

axios.defaults.baseURL =
  "https://621384f2f43692c9c607a739.mockapi.io/api/v1"

export const getContactsApi = () => {
  return axios
    .get("/contacts")
    .then((res) => res.data)
    .catch((err => {
    throw err;
  }))
}

export const removeContactApi = (id) => {
  return axios
    .delete("/contacts/" + id)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      throw err
    })
}

export const postContactApi = (newContact) => {
  return axios
    .post("/contacts", newContact)
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
}
