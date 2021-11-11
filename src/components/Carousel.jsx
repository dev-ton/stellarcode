import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Carousel.css"

export const Carousel = ({ images }) => {
  

  return (
    <Swiper 
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    a11y={{prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide'}}
    loop={true}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {images.map(image => {
        return (
          <div key={`slide_${image.id}`}>
            <SwiperSlide>
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={image.title}
              loading="lazy"
            />
            </SwiperSlide>
          </div>
        )
      })}
    </Swiper>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Carousel
