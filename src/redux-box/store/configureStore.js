import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../utils/base';
import modalReducer from "../../redux-box/reducer/modalReducer";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});


