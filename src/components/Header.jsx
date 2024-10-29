import DesktopNav from './DesktopNav'
import avatarIcon from '../assets/images/image-avatar.png'
import logoImg from '../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCartTab } from '../store/CartSlice'

const Header = () => {
  const { quantity } = useSelector((state) => state.productQuantity)
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between max-h-12 sm:max-h-14 md:max-h-14 lg:max-h-14 mt-6 border-b border-orange-pale shadow-sm shadow-orange-pale p-8 sm:p-0 md:p-0 lg:p-0">
      <div className="header__right flex items-center gap-4 sm:gap-10 md:gap-10 lg:gap-10">
        <div
          className="hamburger-icon pb-9 sm:hidden md:hidden lg:hidden"
          onClick={() => {
            document
              .querySelector('.nav-bar')
              .classList.toggle('translate-x-full')
            document.querySelector('.nav-bar').classList.toggle('translate-x-0')
          }}
        >
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
              fill="#69707D"
              fillRule="evenodd"
            />
          </svg>
        </div>

        <div className="logo pb-9">
          <img src={logoImg} alt="sneakers logo" />
        </div>
        <div className="desktop__nav hidden sm:flex md:flex lg:flex">
          <DesktopNav />
        </div>
      </div>

      <div className="header__left flex items-center gap-6 sm:gap-8 md:gap-8 lg:gap-8 pb-10">
        <div
          className="cart__icon cursor-pointer relative"
          onClick={() => {
            dispatch(toggleCartTab())
          }}
        >
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-blue-darkGrayish hover:fill-blue-dark focus:fill-blue-dark active:fill-blue-dark"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              //   fill="#69707D"
              //   fillRule="nonzero"
            />
          </svg>
          {quantity !== 0 && (
            <span className="bg-orange-default rounded-full text-white text-xs px-2.5 absolute -top-2 -right-4">
              {quantity}
            </span>
          )}
        </div>

        <div className="avatar__icon max-w-9 sm:max-w-12 md:max-w-12 lg:max-w-12 border-2 rounded-full cursor-pointer hover:border-orange-default">
          <img src={avatarIcon} alt="avatar icon" />
        </div>
      </div>
    </div>
  )
}

export default Header
