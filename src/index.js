import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { store } from './redux-box/store/configureStore';
import './index.css';
import App from './App';
import "swiper/css/bundle";


// const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(baseApi.middleware),
// });



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
