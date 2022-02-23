import { createAction } from "@reduxjs/toolkit"

export const addContact = createAction("contact/addContact")
export const deleteContact = createAction("contact/delete")
export const filterArray = createAction("contacts/filter") 
// export const setFilter = createAction("filter/input", (e) => {
//   return {
//     payload: e,
//   }
// })
