import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const Carousel = ({
  images,
  index,
  autoslide = false,
  autoslideInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0)
  const [isHoveredPrev, setIsHoveredPrev] = useState(false)
  const [isHoveredNext, setIsHoveredNext] = useState(false)

  const prevSlide = () => {
    if (current === 0) setCurrent(images.length - 1)
    else setCurrent(current - 1)
  }

  const nextSlide = () => {
    if (current === images.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  useEffect(() => {
    if (!autoslide) return
    const slideInterval = setInterval(nextSlide, autoslideInterval)
    return () => clearInterval(slideInterval)
  })

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-ease-out duration-400"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image) => (
          <img
            key={index}
            src={image.name}
            alt="sneaker shoes"
            className="rounded-none sm:rounded-2xl md:rounded-2xl lg:rounded-2xl cursor-default sm:cursor-pointer md:cursor-pointer lg:cursor-pointer object-cover hover:opacity-0 sm:hover:opacity-85 md:hover:opacity-85"
            onClick={() => {
              document.querySelector('.overlay').style.display = 'grid'
            }}
          />
        ))}
      </div>

      <div className="buttons block sm:hidden md:hidden lg:hidden">
        <button
          onMouseOver={() => setIsHoveredPrev(true)}
          onMouseOut={() => setIsHoveredPrev(false)}
          onClick={prevSlide}
          className="absolute top-[50%] left-3 -translate-y-1/2 btn"
        >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              // stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className={` focus:stroke-orange-default ${
                isHoveredPrev ? 'stroke-orange-default ' : 'stroke-blue-dark'
              }`}
            />
          </svg>
        </button>
        <button
          onMouseOver={() => setIsHoveredNext(true)}
          onMouseOut={() => setIsHoveredNext(false)}
          onClick={nextSlide}
          className="absolute top-[50%] right-3 -translate-y-1/2 btn"
        >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              // stroke="#1D2026"
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

      <div className="hidden sm:flex md:flex lg:flex justify-center gap-6 w-full pt-8">
        {images.map((thumb, i) => (
          <div
            key={i}
            className={`max-w-32 rounded-xl border-2 transition-all ${
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

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  autoslide: PropTypes.bool,
  autoslideInterval: PropTypes.number,
}

export default Carousel
