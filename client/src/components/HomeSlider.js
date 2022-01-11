import React from 'react'
import { Link } from 'react-router-dom'

// // Core modules imports are same as usual
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// // Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'

// // Styles must use direct files imports
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

import slider0 from '../Assets/slider0.jpg'
import slider1 from '../Assets/slider1.jpg'
import slider2 from '../Assets/slider2.jpg'
import slider3 from '../Assets/slider3.jpg'
import slider4 from '../Assets/slider4.jpg'
import slider5 from '../Assets/slider5.jpg'


const HomeSlider = () => {
  return (
    <Swiper className='mainSwiper'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      autoplay={ true } 
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Link to='/bags/30'><img src={slider0}/></Link></SwiperSlide>
      <SwiperSlide><Link to='/bags/38'><img src={slider1}/></Link></SwiperSlide>
      <SwiperSlide><Link to='/bags/39'><img src={slider2}/></Link></SwiperSlide>
      <SwiperSlide><Link to='/bags/40'><img src={slider3}/></Link></SwiperSlide>
      <SwiperSlide><Link to='/bags/41'><img src={slider4}/></Link></SwiperSlide>
      <SwiperSlide><Link to='/bags/42'><img src={slider5}/></Link></SwiperSlide>
      {/* ... */}
    </Swiper>
  )
}

export default HomeSlider
