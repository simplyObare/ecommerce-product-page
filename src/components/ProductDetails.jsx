import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  incrementQuantity,
  decrementQuantity,
} from '../store/productQuantitySlice'
import { addToCart } from '../store/CartSlice'

const ProductDetails = () => {
  const [isHoveredIncrease, setIsHoveredIncrease] = useState(false)
  const [isHoveredDecrease, setIsHoveredDecrease] = useState(false)

  const dispatch = useDispatch()
  const { quantity } = useSelector((state) => state.productQuantity)

  return (
    <articles className="product-details p-4">
      <h1 className="product-title uppercase font-semibold text-sm leading-3 tracking-widest mb-4">
        Sneaker Company
      </h1>

      <h2 className="product-name font-bold text-blue-dark text-3xl sm:text-4xl md:text-4xl lg:text-4xl text-pretty capitalize mb-8">
        Fall limited edition sneakers
      </h2>

      <p className="product-description mb-6 leading-relaxed">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="product-prices flex flex-row sm:flex-col md:flex-col lg:flex-col justify-between gap-3">
        <div className="discounted-price flex gap-4">
          <p className="current-price text-2xl text-blue-dark font-bold">
            $125.00
          </p>

          <p className="discount flex items-center bg-blue-dark text-white text-sm rounded-lg px-2">
            50%
          </p>
        </div>
        <p className="original-price font-bold line-through">$250.00</p>
      </div>

      <div className="buttons flex flex-col sm:flex-row md:flex-row lg:flex-row items-center gap-4 mt-6">
        <div className="quantity__btn w-full sm:w-2/5 md:w-2/5 lg:w-2/5 flex items-center justify-between bg-orange-pale rounded-lg px-6 py-4">
          <button
            onMouseOver={() => setIsHoveredDecrease(true)}
            onMouseOut={() => setIsHoveredDecrease(false)}
            onClick={() => dispatch(decrementQuantity())}
          >
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </defs>
              <use
                fill="#FF7E1B"
                fillRule="nonzero"
                href="#a"
                className={` focus:fill-orange-default/75 ${
                  isHoveredDecrease
                    ? 'fill-orange-default/75 '
                    : 'fill-orange-default'
                }`}
              />
            </svg>
          </button>
          <span className="quantity text-blue-dark font-bold">{quantity}</span>
          <button
            onMouseOver={() => setIsHoveredIncrease(true)}
            onMouseOut={() => setIsHoveredIncrease(false)}
            onClick={() => dispatch(incrementQuantity())}
          >
            <svg
              width="12"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-orange-default hover:fill-orange-pale focus:fill-orange-pale active:fill-orange-pale"
            >
              <defs>
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </defs>
              <use
                fill="#FF7E1B"
                fillRule="nonzero"
                href="#b"
                className={` focus:fill-orange-default/75 ${
                  isHoveredIncrease
                    ? 'fill-orange-default/75'
                    : 'fill-orange-default'
                }`}
              />
            </svg>
          </button>
        </div>

        <button
          className="add-to-cart__btn w-full sm:w-3/5 md:3/5 flex lg:3/5 items-start justify-center gap-3 bg-orange-default hover:bg-orange-default/75  text-blue-dark font-bold rounded-lg px-6 py-4"
          onClick={() => dispatch(addToCart())}
        >
          <div className="cart__icon">
            <svg
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-blue-dark"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                // fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <p>Add to cart</p>
        </button>
      </div>
    </articles>
  )
}

export default ProductDetails
