import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAllProducts,fetchProductsByFilters}   from './ProductListAPI';

const initialState = {
  products:[],
  status: 'idle',
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProducts', async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    console.log(response.data);
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters', 
  async ({filter,sort}) => {
  const response = await fetchProductsByFilters(filter,sort);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
}
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        //  state.products.push(...action.payload);
      })

      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
         state.products = action.payload;
        //  state.products.push(...action.payload);
      });
  },
});
export const { clearSelectedProduct } = productSlice.actions;
// export const{increment}=productSlice.actions;
export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
