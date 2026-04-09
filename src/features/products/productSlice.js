import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//  async thunk for API call
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data.products;
    } catch (error) {
      return rejectWithValue("Failed to fetch products");
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default productSlice.reducer;