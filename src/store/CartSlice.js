import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartTab: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items.pop(action.payload)
    },
    toggleCartTab: (state) => {
      state.cartTab = !state.cartTab
    },
  },
})

export const { addToCart, removeFromCart, toggleCartTab } = cartSlice.actions

export default cartSlice.reducer
