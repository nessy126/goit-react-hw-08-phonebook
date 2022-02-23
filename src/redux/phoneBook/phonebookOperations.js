import {
  getContactsApi,
  removeContactApi,
  postContactApi,
} from "../../servises/api"
import { createAsyncThunk } from "@reduxjs/toolkit" 

export const getContacts = createAsyncThunk(
  "get/contacts", async (_, thunckApi) => {
    try {
      const contacts = await getContactsApi()
      return contacts;
    } catch ( err ) {
      return thunckApi.rejectWithValue(err.message)
    }
  }
)

export const deleteContact = createAsyncThunk(
  "remove/contacts",
  async (id, thunckApi) => {
    try {
      await removeContactApi(id)
      return id
    } catch (err) {
      return thunckApi.rejectWithValue(err.message)
    }
  }
)

export const addContact = createAsyncThunk(
  "add/contacts",
  async (newContact, thunckApi) => {
    try {
      const addsContact = await postContactApi(newContact)
      console.log(addsContact)
      return addsContact
    } catch (err) {
      return thunckApi.rejectWithValue(err.message)
    }
  }
)