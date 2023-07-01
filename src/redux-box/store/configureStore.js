import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../utils/base';
// import modalReducer from "../../redux-box/reducer/modalReducer";
import modalRed from '../reducer/modalRed';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // modal: modalReducer,
    modal: modalRed,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});


