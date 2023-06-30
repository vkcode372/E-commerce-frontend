import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ProductRuducer  from '../features/Product/productlistSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product:ProductRuducer,
  },
});
