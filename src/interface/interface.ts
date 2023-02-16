export interface rootState {
    user: userState,
}

interface userState {
    userInfo: {},
    loading: false,
    userToken: string,
    success: boolean,
}

export interface userApi {
    userNameOrEmailAddress: string,
    password: string,
    rememberClient: true,
}