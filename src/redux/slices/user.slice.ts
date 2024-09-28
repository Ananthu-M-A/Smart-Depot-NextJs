import IUser from '@/interfaces/user.interface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchUser = createAsyncThunk<IUser, string>('user/fetchUser',
    async (userId) => {
        const response = await fetch(`/api/login-security/${userId}`);
        const data = await response.json();
        return data as IUser;
    });

export const loginUser = createAsyncThunk<IUser, { email: string, password: string }>
    ('user/loginUser', async (loginData, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const user: IUser = await response.json();
            return user;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }

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
                state.error = action.error.message as unknown as null;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as unknown as null;
            });
    },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;
