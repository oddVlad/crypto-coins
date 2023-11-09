import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface IAppState{
    value: number,
};

const initialState:IAppState = {
    value: 0,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers:{
        changeValue(state, action: PayloadAction<number>){
            state.value = action.payload;
        }
    },

});

export default appSlice.reducer;