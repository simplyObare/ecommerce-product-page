import { useSelector } from 'react-redux'
import CartTab from '../components/CartTab'
import Header from '../components/Header'
import ImageSlider from '../components/ImageSlider'
import MobileNavBar from '../components/MobileNavBar'
import Overlay from '../components/Overlay'
import ProductDetails from '../components/ProductDetails'

const MainPage = () => {
  const isCartVisible = useSelector((state)=>state.cart.cartTab)

  return (
    <div className="w-full sm:4/5 md:w-4/5 lg:w-4/5 relative">
      <Overlay />
      <MobileNavBar />
      <header>
        <Header />
      </header>
      <main className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center gap-5 sm:gap-10 md:gap-10 lg:gap-10 p-0 sm:p-4 md:p-4 lg:p-4 mt-0 sm:mt-4 md:mt-4 lg:mt-4 mb-6">
        <ImageSlider />
        <ProductDetails />
      </main>

      {isCartVisible && <CartTab />}
    </div>
  )
}

export default MainPage
