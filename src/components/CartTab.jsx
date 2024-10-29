import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartTab = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <div className=" max-w-[350px] sm:w-[350px] md:w-[350px] min-w-[315px] h-[250px] bg-white sm:shadow-2xl md:shadow-2xl lg:shadow-2xl shadow-none sm:shadow-orange-default/45 md:shadow-orange-default/45 lg:shadow-orange-default/45 sm:border-white md:border-white lg:border-white rounded-xl absolute sm:top-16 md:top-16 lg:top-16 top-[100px] sm:-right-20 md:-right-20 lg:-right-20 right-1">
      <h1 className="text-blue-dark font-bold p-6  border-b border-orange-pale  shadow-sm shadow-orange-pale">
        Cart
      </h1>

      <div className="p-6 grid place-content-center">
        {cart.items.length === 0 ? (
          <p className="font-bold mt-11">Your cart is empty</p>
        ) : (
          <CartItem />
        )}
      </div>
    </div>
  )
}

export default CartTab
