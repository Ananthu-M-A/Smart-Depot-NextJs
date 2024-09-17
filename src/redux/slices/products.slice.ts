import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts',
  async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    return data;
  });

export const fetchProductDetails = createAsyncThunk('products/fetchProductDetails',
  async (productId: string | string[]) => {
    const response = await fetch(`/api/products/${productId}`);
    const data = await response.json();
    return data;
  });


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.error.message;
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
