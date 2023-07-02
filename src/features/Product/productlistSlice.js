import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchAllProducts,fetchProductsByFilters}   from './ProductListAPI';

const initialState = {
  products:[],
  status: 'idle',
  totalItems: 0,
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProducts', async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters', 
  async ({filter,sort,pagination}) => {
  const response = await fetchProductsByFilters(filter,sort,pagination);
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
         state.products = action.payload.products;
         state.totalItems = action.payload.totalItems;
        //  state.products.push(...action.payload);
      });
  },
});
export const { clearSelectedProduct } = productSlice.actions;
// export const{increment}=productSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export const selectToatalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
