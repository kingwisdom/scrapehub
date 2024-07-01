import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    user: window.localStorage.getItem('user') !== null ? JSON.parse(window.localStorage.getItem('user')) : null,
    isOlder: false
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
            window.localStorage.clear();
        },
        older: (state) => {
            state.isOlder = true
        },

    }

})

export const { loginUser, logout, older } = userSlice.actions;
export default userSlice.reducer;
