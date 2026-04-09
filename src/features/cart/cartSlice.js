import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  search: ""
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // ✅ ADD THIS (IMPORTANT FIX)
    clearCart: (state) => {
      state.items = [];
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,   // ✅ EXPORT THIS
  setSearch
} = cartSlice.actions;

export default cartSlice.reducer;