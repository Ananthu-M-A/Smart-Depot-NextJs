import IUser from '@/interfaces/user.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk<IUser, string>('user/fetchUser',
    async (userId) => {
        const response = await fetch(`/api/login-security/${userId}`);
        const data = await response.json();
        console.log(data);
        return data as IUser;
    });

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {} as IUser,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                // state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;
