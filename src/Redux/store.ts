import { combineReducers, configureStore } from "@reduxjs/toolkit"
import appSlice from "./Reducers/appSlice"

const routeReducer = combineReducers({
    appSlice: appSlice
});

export const store = configureStore({
    reducer: routeReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch