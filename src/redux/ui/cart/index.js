import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        incrementDish: (state, {payload: dishId}) => {
            state[dishId] = (state[dishId] || 0) + 1;
        },

        decrementDish: (state, {payload: dishId}) => {
            state[dishId] = (state[dishId] || 0) - 1;

            if (state[dishId] <= 0) {
                delete state[dishId];
            }
        }
    }
});

export const {incrementDish, decrementDish} = cartSlice.actions;