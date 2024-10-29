import { configureStore } from '@reduxjs/toolkit'
import productQuantityReducer from '../store/productQuantitySlice'
import cartReducer from '../store/CartSlice'

export const store = configureStore({
  reducer: {
    productQuantity: productQuantityReducer,
    cart: cartReducer,
  },
})

export default store
