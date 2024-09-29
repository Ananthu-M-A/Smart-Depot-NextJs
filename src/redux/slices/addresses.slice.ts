import IAddress from '@/interfaces/address.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchAddresses = createAsyncThunk<IAddress[], string>('addresses/fetchAddresses', async (userId) => {
  const response = await fetch(`/api/addresses/${userId}`);
  const data = await response.json();
  return data;
});

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    byId: {} as Record<string, IAddress>,
    allIds: [] as string[],
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
        action.payload.forEach((address) => {
          state.byId[address._id] = address;
          if (!state.allIds.includes(address._id)) {
            state.allIds.push(address._id);
          }
        });
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message as unknown as null;
      });
  },
});

export const selectAllAddresses = (state: RootState) => state.addresses.allIds.map(id => state.addresses.byId[id]);
export const selectAddressById = (state: RootState, addressId: string) => state.addresses.byId[addressId];
export const selectAddressesStatus = (state: RootState) => state.addresses.status;

export default addressesSlice.reducer;
