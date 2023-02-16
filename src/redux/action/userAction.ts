import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../api/axios'
import { userApi } from '../../interface/interface'
import { URL } from '../../url/url'

export const userLogin = createAsyncThunk(
    'user/login',
    async (data: userApi, { rejectWithValue }) => {
        try {
            const res = await instance.post(URL.AUTH_LOGIN, {
                userNameOrEmailAddress: data.userNameOrEmailAddress,
                password: data.password,
                rememberClient: data.rememberClient
            });
            localStorage.setItem("userToken", res.data.result.accessToken);
        }
        catch (error) {
            console.log(error)
        }
    }
)