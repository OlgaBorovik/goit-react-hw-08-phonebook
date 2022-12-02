import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending] (state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected] (state, action) {
      state.isLoading = false;
      state.error = action.payload;
      
    },
    [addContact.pending](state, action) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})
   /*const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const tasksReducer = tasksSlice.reducer;*/

    // addContact: {
    //     reducer(state, action) {
    //             state.push(action.payload)
    //         },
    //         prepare(name, number) {
    //             return {
    //                 payload: {
    //                 name,
    //                 number,
    //                 id: nanoid(5)
    //                 }
    //             }
    //         }
    //     },
    //     deleteContact: {
    //         reducer(state, action) {
    //             const index = state.findIndex(contact => contact.id === action.payload)
    //             state.splice(index, 1)
    //         }
//     //     }
//     }
//  })

 

// Експортуємо генератори екшенів та редюсер
// export const { fetchingInProgress, fetchingSuccess, fetchingError, addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;




