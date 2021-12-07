import React from "react"
import classNames from "classnames"
import Card from "./Card"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide} from 'swiper/react';
import { A11y } from 'swiper';
import 'swiper/css';

const CardsMobile = ({ items, hideLastItemOnMobile = false }) => {



 

  return (
    <Swiper 
    modules={[A11y]}
    spaceBetween={36}
    slidesPerView={1.5}
    height={256}
    centeredSlides={true}
    a11y={{prevSlideMessage: 'Previous project', nextSlideMessage: 'Next project'}}
    loop={true}
    >
      <div className="flex flex-wrap -mx-3 lg:-mx-6">
        {items.map(item => (
          <SwiperSlide key={item.id}>
          <motion.div
            className={classNames(" w-full py-8", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            initial="false"
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <Card {...item} />
          </motion.div>
          </SwiperSlide>
        ))}
      </div>



  </Swiper>
  )
}



export default CardsMobile
