import productImg from '../assets/images/image-product-1-thumbnail.jpg'
import deleteBtn from '../assets/images/icon-delete.svg'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/CartSlice'
import { resetQuantity } from '../store/productQuantitySlice'

const CartItem = () => {
  const { quantity, price } = useSelector((state) => state.productQuantity)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-4">
      <div className="main__container flex items-center justify-between gap-2">
        <img
          src={productImg}
          alt="sneaker shoes"
          className="w-1/5 rounded-lg"
        />
        <div className="content__container text-sm w-4/5 flex flex-col justify-between gap-[0.65rem]">
          <h1>Fall Limited Edition Sneakers</h1>
          <div className="product__pricing flex items-center gap-2">
            <p>$125.00 x {quantity}</p>
            <p className="font-bold text-blue-dark">${price}</p>
          </div>
        </div>
        <img
          src={deleteBtn}
          alt="delete button"
          className="cursor-pointer"
          onClick={() => {
            dispatch(removeFromCart()) && dispatch(resetQuantity())
          }}
        />
      </div>
      <button className="font-bold text-blue-dark w-full px-6 py-3 rounded-lg bg-orange-default hover:bg-orange-default/75">
        Checkout
      </button>
    </div>
  )
}

export default CartItem
