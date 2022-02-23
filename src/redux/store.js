import { configureStore } from "@reduxjs/toolkit"
// import phoneBookReducer from "./phoneBook/phoneBookReducer"
import contacts from "./phoneBook/phoneBookSlice"

export const store = configureStore({
  reducer: {
    // phonebook: phoneBookReducer,
    contacts,
  },
  devTools: process.env.NODE_ENV === "development",
})
