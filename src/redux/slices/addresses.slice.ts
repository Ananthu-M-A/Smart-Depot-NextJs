import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAddresses = createAsyncThunk('addresses/fetchAddresses', async () => {
  const response = await fetch('/api/addresses');
  const data = await response.json();
  return data;
});

const addressesSlice = createSlice({
  name: 'addresses',
  initialState: {
    addresses: [],
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
        // state.error = action.error.message;
      });
  },
});

export default addressesSlice.reducer;
