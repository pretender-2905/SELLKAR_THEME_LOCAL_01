// import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   items: [], // { id, name, image, price, quantity }
//   totalQuantity: 0,
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload.id);
//       if (item) {
//         item.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(i => i.id !== action.payload);
//       state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
//     },
//     incrementQuantity: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item) item.quantity += 1;
//       state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
//     },
//     decrementQuantity: (state, action) => {
//       const item = state.items.find(i => i.id === action.payload);
//       if (item && item.quantity > 1) item.quantity -= 1;
//       state.totalQuantity = state.items.reduce((sum, i) => sum + i.quantity, 0);
//     },
//   },
// });

// export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
// export default cartSlice.reducer;




// cartSlice.js

// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      
      // Ensure quantity is a number
      const quantity = Number(action.payload.quantity) || 1;
      
      if (existingItem) {
        // Add the new quantity to existing quantity
        existingItem.quantity = Number(existingItem.quantity) + quantity;
      } else {
        // Add new item to cart with quantity as number
        state.items.push({
          ...action.payload,
          quantity: quantity
        });
      }
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = Number(item.quantity) + 1;
      }
    },
    
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && Number(item.quantity) > 1) {
        item.quantity = Number(item.quantity) - 1;
      }
    },
    
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;