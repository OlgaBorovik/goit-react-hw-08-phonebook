import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filtersInitialState,
    reducers: {
        setFilter (_, action) {
                return action.payload
            }
        }
    }
)

// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// export const filterReducer = createReducer(filtersInitialState, {
//     [setFilter]: (state, action) => {
//         return {state: action.payload}
//     }
// })
