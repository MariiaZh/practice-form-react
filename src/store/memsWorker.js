import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dataCats: [],
    selectedHourNumber: new Date().getHours(),
    fetchSuccess: false,
    catUrl: '',
    catId: ''
}

const memsWorker = createSlice({
    name: "memsWorker",
    initialState,
    reducers: {

        changeNumber(state, action) {
            state.selectedHourNumber = action.payload;
        },

        changeCatsPhoto(state, action) {
            state.catUrl = action.payload[0].url;
            state.catId = action.payload[0].id;
            console.log(action.payload[0].url)
            state.fetchSuccess = true;
        },

        updateCatsDataBase(state, action) {
            state.dataCats = action.payload.map(item => item);
        },

    },
})

export const memsWorkerActions = memsWorker.actions;
export default memsWorker.reducer;