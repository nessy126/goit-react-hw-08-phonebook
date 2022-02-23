import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "./phonebookOperations";
// import { setFilter } from "./phoneBookActions";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    filter: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter(state, { payload }) {
      return {
        ...state,
        filter: payload,
      }
    },
  },
  extraReducers: {
    [addContact.pending]: (state) => ({
      ...state,
      isLoading: true
    }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      contacts: [...state.contacts, payload],
      isLoading: false,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
    [deleteContact.pending]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      )
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
    [getContacts.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.contacts = payload;
      state.isLoading = false
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }
  },
})

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;