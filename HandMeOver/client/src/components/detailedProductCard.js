// import React from 'react'
import React, { useState } from 'react'
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'


// // Styles must use direct files imports
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module
import 'swiper/modules/thumbs/thumbs.scss' // Thumbs Module
import 'swiper/modules/free-mode/free-mode.scss' // Free-mode module

SwiperCore.use([FreeMode, Navigation, Thumbs])

const DetailedProductCard = ({
  name,
  brand,
  description,
  condition,
  price,
  image,
  image2,
  image3,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className='swiper-wrapper wrapper'>
      <div className='swiper-container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={0}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          className='mySwiper2'
        >
          <SwiperSlide>
            <img className='product-Slider-Image' src={image} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='product-Slider-Image' src={image2} />
          </SwiperSlide>
          <SwiperSlide>
            <img className='product-Slider-Image' src={image3} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          className='mySwiper'
        >
          <SwiperSlide className='product-Slider-Thumbnail card'>
            <img src={image} />
          </SwiperSlide>
          <SwiperSlide className='product-Slider-Thumbnail card'>
            <img src={image2} />
          </SwiperSlide>
          <SwiperSlide className='product-Slider-Thumbnail card'>
            <img src={image3} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='product-card'>
        <h4 className='product-brand'>{brand}</h4>
        <h3 className='product-name'>{name}</h3>
        <p className='product-description'>{description}</p>
        <p className='product-condition'>Condition: {condition}</p>
        <p className='product-price'>£ {price}</p>
      </div>
    </div>
  )
}

export default DetailedProductCard
