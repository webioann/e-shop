import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    currentUser: string | null
}
// get state from LocalStorage  (setItem on App.tsx) ====
// const storedTheme = localStorage.getItem('theme') || 'dark';

// const storedUserPhoto = localStorage.getItem('userPhoto') || null;

const user: string | null  = localStorage.getItem("currentUser");
    let storedUser;
    if ( typeof user === 'string' ) {
        storedUser = JSON.parse(user)
    }
    else { storedUser = null }

const initialState: InitialStateType = {
    currentUser: storedUser,
    
}

export const reduxState = createSlice({
    name: "redux",
    initialState,
    reducers: {
        setCurrentUser: (state,actions) => {state.currentUser = actions.payload},
        removeCurrentUser: (state) => {state.currentUser = null},
        // setUserPhoto: (state,actions) => {state.user_photo = actions.payload},
        // deleteUserPhoto: (state) => {state.user_photo = null},
    }
});

export const { 
    setCurrentUser,
    removeCurrentUser,
    // setUserPhoto,
    // deleteUserPhoto,
    // closeMobileMenu,
    // openMobileMenu
} = reduxState.actions;

export default reduxState.reducer;