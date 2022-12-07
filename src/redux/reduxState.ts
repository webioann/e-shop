import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    currentUser: string | null;
    userAvatar: string | null;
}
const initialState: InitialStateType = {
    currentUser: localStorage.getItem("currentUser"),
    userAvatar: localStorage.getItem("userAvatar")
}

export const reduxState = createSlice({
    name: "redux",
    initialState,
    reducers: {
        setCurrentUser: (state,actions) => {
            state.currentUser = actions.payload
            typeof actions.payload === 'string' && localStorage.setItem("currentUser", actions.payload)
        },
        removeCurrentUser: (state) => {
            state.currentUser = null
            localStorage.removeItem("currentUser")
        },
        setUserAvatar: (state,actions) => {
            state.userAvatar = actions.payload
            typeof actions.payload === 'string' && localStorage.setItem("userAvatar", actions.payload)
        },
        deleteUserAvatar: (state) => {
            state.userAvatar = null
            localStorage.removeItem("userAvatar")
        },
    }
});

export const { 
    setCurrentUser,
    removeCurrentUser,
    setUserAvatar,
    deleteUserAvatar,
    // closeMobileMenu,
    // openMobileMenu
} = reduxState.actions;

export default reduxState.reducer;