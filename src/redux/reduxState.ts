import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    currentUser: string | null;
    userAvatar: string | null;
    cartCount: number;
}
const initialState: InitialStateType = {
    currentUser: localStorage.getItem("currentUser"),
    userAvatar: localStorage.getItem("userAvatar"),
    cartCount: 0
}
// const initialState: InitialStateType = {
//     currentUser: null,
//     userAvatar: null
// }

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
        incremented: (state) => {state.cartCount = state.cartCount + 1},
    }
});

export const { 
    setCurrentUser,
    removeCurrentUser,
    setUserAvatar,
    deleteUserAvatar,
    incremented
    // closeMobileMenu,
    // openMobileMenu
} = reduxState.actions;

export default reduxState.reducer;