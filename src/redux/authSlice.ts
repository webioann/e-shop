import { createSlice } from "@reduxjs/toolkit"
import { ICurrentUser } from '../types/auth.types'

type InitialStateType = {
    currentUser: ICurrentUser | null
}
const storedCurrentUser = localStorage.getItem('storedCurrentUser')
let userFromLocalStorage
if( storedCurrentUser ) {
    userFromLocalStorage = JSON.parse(storedCurrentUser)
}
else{ userFromLocalStorage = null }

const initialState: InitialStateType = {
    currentUser: userFromLocalStorage
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createCurrentUser: (state, actions) => {
            state.currentUser = {
                currentUser_Name: actions.payload.userName, 
                currentUser_Email: actions.payload.email,
                currentUser_ID: actions.payload.userID,
                currentUser_PhotoURL: actions.payload.userPhotoURL,
            }
            localStorage.setItem("storedCurrentUser", JSON.stringify(state.currentUser));
        },
        deleteCurrentUser: (state) => {
            state.currentUser = null
            localStorage.removeItem('storedCurrentUser');
        },
    }
});

export const { createCurrentUser, deleteCurrentUser } = authSlice.actions;
export default authSlice.reducer;