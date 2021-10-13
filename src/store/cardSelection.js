import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedName: 0,
}

const cardSelection = createSlice({
    name: "cardSelection",
    initialState,
    reducers: {
        changeName(state, action) {
            state.selectedName = action.payload;
            console.log("state.selectedName", state)
        }
    },
})

export const cardSelectionActions = cardSelection.actions;
export default cardSelection.reducer;