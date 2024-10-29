import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quantity: 0,
  price: 0,
}

const calculatePrice = (quantity) => (quantity * 125).toFixed(2)

const productQuantitySlice = createSlice({
  name: 'productQuantity',
  initialState,
  reducers: {
    incrementQuantity: (state) => {
      state.quantity += 1
      state.price = calculatePrice(state.quantity)
    },
    decrementQuantity: (state) => {
      if (state.quantity > 0) {
        state.quantity -= 1
        state.price = calculatePrice(state.quantity)
      }
    },
    resetQuantity: (state) => {
      state.quantity = 0
      state.price = 0
    },
  },
})

export const { incrementQuantity, decrementQuantity, resetQuantity } =
  productQuantitySlice.actions
export default productQuantitySlice.reducer
