// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterStatus) => {
//     if (filterStatus === '') {
//       return contacts
//     } else {
//        return contacts.filter(({ name }) =>
//       name.includes(filterStatus)
//     );
//     }
//   }
// );
