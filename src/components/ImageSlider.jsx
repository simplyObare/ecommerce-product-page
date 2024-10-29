import { IMAGES } from '../Images'
import Carousel from './Carousel'

const ImageSlider = () => {
  return (
    <div className="p-0 sm:p-10 md:p-10 lg:p-10">
      <Carousel images={IMAGES} autoslide={true} />
    </div>
  )
}

export default ImageSlider
