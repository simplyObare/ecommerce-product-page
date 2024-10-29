import { useState } from 'react'
import PropTypes from 'prop-types'

const OverlayCarousel = ({ overlayImg, index }) => {
  const [current, setCurrent] = useState(0)
  const [isHoveredPrev, setIsHoveredPrev] = useState(false)
  const [isHoveredNext, setIsHoveredNext] = useState(false)

  const prevSlide = () => {
    if (current === 0) setCurrent(overlayImg.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === overlayImg.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }
  return (
    <div>
      <div>
        <div className="overflow-hidden relative">
          <div
            className={`flex transition-ease-out duration-400`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {overlayImg.map((img) => (
              <img
                src={img.name}
                key={index}
                alt="sneaker product"
                className="rounded-2xl"
              />
            ))}
          </div>
        </div>

        <div className=" absolute top-[45%] right-[63%] translate-x-[-50%] translate-y-[-50%]">
          <button
            onMouseOver={() => setIsHoveredPrev(true)}
            onMouseOut={() => setIsHoveredPrev(false)}
            onClick={prevSlide}
            className="btn"
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                className={` focus:stroke-orange-default ${
                  isHoveredPrev ? 'stroke-orange-default ' : 'stroke-blue-dark'
                }`}
              />
            </svg>
          </button>
        </div>

        <div className=" absolute top-[45%] left-[67%] translate-x-[-50%] translate-y-[-50%]">
          <button
            onMouseOver={() => setIsHoveredNext(true)}
            onMouseOut={() => setIsHoveredNext(false)}
            onClick={nextSlide}
            className="btn "
          >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
                className={` focus:stroke-orange-default ${
                  isHoveredNext ? 'stroke-orange-default ' : 'stroke-blue-dark'
                }`}
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-6 w-full pt-4">
        {overlayImg.map((thumb, i) => (
          <div
            key={i}
            className={`max-w-[75px] max-h-[75px] rounded-xl border-2 transition-all ${
              current === i ? 'border-orange-default ' : 'border-transparent'
            }`}
          >
            <img
              src={thumb.thumbnail}
              key={i}
              alt="sneaker thumbnail"
              className={`rounded-xl object-cover cursor-pointer hover:opacity-65 transition-all ${
                current === i ? 'opacity-45' : ''
              }`}
              onClick={() => setCurrent(i)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

OverlayCarousel.propTypes = {
  overlayImg: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
}

export default OverlayCarousel
