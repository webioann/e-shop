import { createSlice,PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    cartCount: number;
    modalVisibility: boolean;
}
const initialState: InitialStateType = {
    cartCount: 0,
    modalVisibility: false,
}

export const modelSlice = createSlice({
    name: "model",
    initialState,
    reducers: {
        incremented: (state) => {state.cartCount = state.cartCount + 1},
        closeModal: (state) => {state.modalVisibility = false},
        openModal: (state) => {state.modalVisibility = true},
    }
});

export const { 
    incremented,
    closeModal,
    openModal

} = modelSlice.actions;

export default modelSlice.reducer;