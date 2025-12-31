import { combineReducers, configureStore } from "@reduxjs/toolkit"
import appSlice from "./Reducers/appSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const routeReducer = combineReducers({
    appSlice: appSlice
});

export const store = configureStore({
    reducer: routeReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;