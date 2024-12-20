import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart/cart';

export const store = configureStore({
    reducer: {
        cartSlice,
    },
});
