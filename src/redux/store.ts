import { configureStore } from '@reduxjs/toolkit'
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import reduxState  from './reduxState'
import modelSlice from './modelSlice'
import { fakeStoreApi } from './fakestoreApi'

const store = configureStore({
    reducer: {
        redux: reduxState,
        model: modelSlice,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware().concat(
        [
            fakeStoreApi.middleware,
        ]
    ),
})

type reduxState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<reduxState> = useSelector;

export default store;