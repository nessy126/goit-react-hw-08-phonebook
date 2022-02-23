import { createReducer, combineReducers } from "@reduxjs/toolkit"
import { setFilter } from "./phoneBookActions";
import {getContacts, deleteContact, addContact } from "./phonebookOperations";

 const contactsReducer = createReducer([], {
  //  [addContact.fulfilled]: (state, { payload }) => {
  //    console.log(payload)
  //    return [...state, payload]
  //  },

  //  [deleteContact.fulfilled]: (state, { payload }) => {
  //    const contsctsWithoutDeleted = state.filter(
  //      (contact) => contact.id !== payload
  //    )
  //    return contsctsWithoutDeleted
  //  },
  //  [getContacts.fulfilled]: (_, { payload }) => {
  //    return payload
  //  },
 })

 const filterReducer = createReducer("", {
//    [setFilter]: (_, { payload }) => payload,
 })

const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})
export default phoneBookReducer;