import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState: AppSliceType = {
    name: 'sanyam'
}

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const { setName } = appSlice.actions;

export default appSlice.reducer;