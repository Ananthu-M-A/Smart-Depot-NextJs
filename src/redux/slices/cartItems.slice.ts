import ICartItem from '@/interfaces/cart.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchCartItems = createAsyncThunk('cart-items/fetchCartItems', async () => {
  const response = await fetch('/api/cart-items');
  const data = await response.json();
  return data;
});

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [] as ICartItem[],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as unknown as null;
      });
  },
});

export const selectCartItems = (state: RootState) => state.cartItems.cartItems;
export const selectCartItemsStatus = (state: RootState) => state.cartItems.status;

export default cartItemsSlice.reducer;
