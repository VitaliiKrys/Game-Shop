import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        purchasedGames: 0,
        dicount: 0,
    },
    reducers: {
        activateDiscount: (state, action) => {
            state.dicount = action.payload;
        },
        buyItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        addItemToCart: (state, action) => {
            console.log('clicked');
            state.items.push(action.payload);
        },
        incrementPurchasedGames: (state) => {
            state.purchasedGames += 1;
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                } else {
                    state.items.splice(index, 1);
                }
            }
        },
    },
});
export const { addItemToCart, incrementPurchasedGames, buyItem, removeItem, activateDiscount } = cartSlice.actions;
export default cartSlice.reducer;
