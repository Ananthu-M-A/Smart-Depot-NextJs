import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import IOrder from '@/interfaces/order.interface';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await fetch('/api/orders');
  const data = await response.json();
  return data;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [] as IOrder[],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as unknown as null;
      });
  },
});

export const selectOrders = (state: RootState) => state.orders.orders;
export const selectOrdersStatus = (state: RootState) => state.orders.status;

export default ordersSlice.reducer;
