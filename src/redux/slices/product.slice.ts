import IProduct from '@/interfaces/product.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductDetails = createAsyncThunk<IProduct, string>('product/fetchProductDetails',
    async (productId) => {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        return data as IProduct;
    });


const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: {} as IProduct,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetails.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductDetails.fulfilled, (state, action)  => {
                state.product = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchProductDetails.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as unknown as null;
            });
    },
});

export default productSlice.reducer;
