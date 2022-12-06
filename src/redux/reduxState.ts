import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    currentUser: string | null;
    userAvatar: string | null;
}
const storedUserAvatar = localStorage.getItem('userAvatar') || null;
const storedUser = localStorage.getItem('currentUser') || null;

const initialState: InitialStateType = {
    currentUser: storedUser,
    userAvatar: storedUserAvatar
}

export const reduxState = createSlice({
    name: "redux",
    initialState,
    reducers: {
        setCurrentUser: (state,actions) => {state.currentUser = actions.payload},
        removeCurrentUser: (state) => {state.currentUser = null},
        setUserAvatar: (state,actions) => {state.userAvatar = actions.payload},
        deleteUserAvatar: (state) => {state.userAvatar = null},
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