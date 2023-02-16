import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../action/userAction';

const initialState = {
    loading: false,
    userInfo: {},
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.success = true;
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            state.success = false;
        });
    }
})

export const {
} = userSlice.actions;

export default userSlice.reducer