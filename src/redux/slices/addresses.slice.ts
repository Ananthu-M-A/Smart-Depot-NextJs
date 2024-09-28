import IAddress from '@/interfaces/address.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchAddresses = createAsyncThunk('addresses/fetchAddresses', async () => {
  const response = await fetch('/api/addresses');
  const data = await response.json();
  return data;
});

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    addresses: [] as IAddress[],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as unknown as null;
      });
  },
});

export const selectAddresses = (state: RootState) => state.addresses.addresses;
export const selectAddressesStatus = (state: RootState) => state.addresses.status;

export default addressesSlice.reducer;
