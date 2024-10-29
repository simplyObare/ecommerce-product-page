import { IMAGES } from '../Images'
import OverlayCarousel from './OverlayCarousel'
import { useState } from 'react'

const Overlay = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="hidden sm:block">
      <div className="overlay hidden fixed inset-0 bg-black bg-opacity-50 z-50 place-content-center">
        <div className="w-[500px] p-6">
          <div
            className="close-btn mb-6 flex justify-end cursor-pointer"
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={() => {
              document.querySelector('.overlay').style.display = 'none'
            }}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
                className={` focus:fill-orange-default ${
                  isHover ? 'fill-orange-default ' : 'fill-white'
                }`}
              />
            </svg>
          </div>
          <OverlayCarousel overlayImg={IMAGES} />
        </div>
      </div>
    </div>
  )
}

export default Overlay
