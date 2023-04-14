import { configureStore } from '@reduxjs/toolkit'

import sortingStateSlice from './sorting-slice';

const store = configureStore({
    reducer: {
        sortingStateReducer: sortingStateSlice.reducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;