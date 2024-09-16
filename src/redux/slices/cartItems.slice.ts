import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartItems = createAsyncThunk('cart-items/fetchCartItems', async () => {
  const response = await fetch('/api/cart-items');
  const data = await response.json();
  return data;
});

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
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
        // state.error = action.error.message;
      });
  },
});

export default cartItemsSlice.reducer;
