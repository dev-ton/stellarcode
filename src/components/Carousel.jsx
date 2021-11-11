import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import Swiper from "react-id-swiper"
import "swiper/swiper-bundle.min.css"

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
            <GatsbyImage
              image={image.gatsbyImageData}
              alt={image.title}
            />
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
