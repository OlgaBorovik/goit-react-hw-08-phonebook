import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice"

axios.defaults.baseURL = "https://63874d14e399d2e473fafc01.mockapi.io/contacts/"

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', async (_, thunkAPI) => {
    try {
      const response = await axios.get("contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
) 

export const addContact = createAsyncThunk(
  'contacts/addContact', async ({name, phone}, thunkAPI) => {
    try {
      const response = await axios.post("contacts", {name, phone});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${contactId}`,)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)



