import React from 'react'

// // Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// // Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'

// // Styles must use direct files imports
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

const HomeSlider = () => {
  return (

    <Swiper className='mainSwiper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={ false } 
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  )
}

export default HomeSlider
