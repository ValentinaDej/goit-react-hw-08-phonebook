// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsApi from 'services/contactsApi';

// export const fetchAllContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsApi.getAllContacts();
//       return contacts;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   }
// );

// export const fetchAddContact = createAsyncThunk(
//   'addContact',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await contactsApi.addContact(data);
//       return result;
//     } catch (responce) {
//       return rejectWithValue(responce.data.message);
//     }
//   },
//   {
//     condition: ({ name }, { getState }) => {
//       const { contacts } = getState();
//       const normalizedName = name.toLowerCase();
//       const result = contacts.items.find(({ name }) => {
//         return name.toLowerCase() === normalizedName;
//       });

//       if (result) {
//         alert(`Contact ${name} is already exist!`);
//         return false;
//       }
//     },
//   }
// );

// export const fetchDeleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       await contactsApi.deleteContact(id);
//       return id;
//     } catch ({ response }) {
//       return rejectWithValue(response.data.message);
//     }
//   }
// );
