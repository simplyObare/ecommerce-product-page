import { useState } from 'react'

const MobileNavBar = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="nav-bar fixed inset-0 bg-black bg-opacity-50 z-50 translate-x-full sm:hidden md:hidden lg:hidden">
      <nav className="top-0 left-0 h-full w-3/4 bg-white p-8">
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className=" mb-8 cursor-pointer"
          onClick={() => {
            document
              .querySelector('.nav-bar')
              .classList.toggle('translate-x-full')
            document.querySelector('.nav-bar').classList.toggle('translate-x-0')
          }}
        >
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fillRule="evenodd"
              className={` focus:fill-orange-default ${
                isHover ? 'fill-orange-default ' : 'fill-blue-darkGrayish'
              }`}
            />
          </svg>
        </div>

        <ul className="flex flex-col gap-4 text-blue-dark ">
          <li className="nav">Collection</li>
          <li className="nav">Men</li>
          <li className="nav">Women</li>
          <li className="nav">About</li>
          <li className="nav">Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavBar
