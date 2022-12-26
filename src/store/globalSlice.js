import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false
};

const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        showLoader: (state, action) => {
            state.isLoading = true;
        },
        hideLoader: (state, action) => {
            state.isLoading = false;
        }
    }
});

export const { showLoader, hideLoader } = globalSlice.actions;

export default globalSlice.reducer;