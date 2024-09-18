import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/products.slice';
import ordersReducer from './slices/orders.slice';
import addressesReducer from './slices/addresses.slice';
import userReducer from './slices/user.slice';
import cartItemsReducer from './slices/cartItems.slice';
import productReducer from './slices/product.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
    addresses: addressesReducer,
    user: userReducer,
    cartItems: cartItemsReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;