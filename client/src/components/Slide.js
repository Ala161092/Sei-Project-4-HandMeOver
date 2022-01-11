import Carousel from 'react-bootstrap/Carousel'

import projectImage from '../Assets/home1.jpg'

function Slider() {
  return (
    <Carousel className='full-width'>
      <Carousel.Item interval={1000}>
        <img className='widthpic' src={projectImage} />
        <Carousel.Caption>
          <h1 className='heading'>FirstSlide</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='widthpic' src={projectImage} />
        <Carousel.Caption>
          <h1 className='heading'>SecondSlide</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
