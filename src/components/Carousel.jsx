import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import "./Carousel.css"

export const Carousel = ({ images }) => {
  
  const swiperParams = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  }
  return (
    <Swiper {...swiperParams}>
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
