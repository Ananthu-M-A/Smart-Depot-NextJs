import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import IOrder from '@/interfaces/order.interface';

export const fetchOrders = createAsyncThunk<IOrder[], string>('orders/fetchOrders', async (userId) => {
  const response = await fetch(`/api/orders/${userId}`);
  const data = await response.json();
  return data;
});

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    byId: {} as Record<string, IOrder>,
    allIds: [] as string[],
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
        action.payload.forEach((order) => {
          state.byId[order._id] = order;
          if (!state.allIds.includes(order._id)) {
            state.allIds.push(order._id);
          }
        });
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as unknown as null;
      });
  },
});

export const selectAllOrders = (state: RootState) => state.orders.allIds.map(id => state.orders.byId[id]);
export const selectOrderById = (state: RootState, orderId: string) => state.orders.byId[orderId];
export const selectOrdersStatus = (state: RootState) => state.orders.status;

export default ordersSlice.reducer;
