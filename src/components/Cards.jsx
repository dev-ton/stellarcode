import React, {useEffect, useState} from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Card from "./Card"
import Button from "./Button"
import { motion } from "framer-motion"

const Cards = ({ items, hideLastItemOnMobile = false }) => {



 // Array of all news articles
 const allNews = items

 // State for the list
 const [list, setList] = useState([...allNews.slice(0, 3)])

 // State to trigger oad more
 const [loadMore, setLoadMore] = useState(false)

 // State of whether there is more to load
 const [hasMore, setHasMore] = useState(allNews.length > 3)

 // Load more button click
 const handleLoadMore = () => {
   setLoadMore(true)
 }

 // Handle loading more articles
 useEffect(() => {
   if (loadMore && hasMore) {
     const currentLength = list.length
     const isMore = currentLength < allNews.length
     const nextResults = isMore
       ? allNews.slice(currentLength, currentLength + 3)
       : []
     setList([...list, ...nextResults])
     setLoadMore(false)
   }
 }, [loadMore, hasMore]) //eslint-disable-line

 //Check if there is more
 useEffect(() => {
   const isMore = list.length < allNews.length
   setHasMore(isMore)
 }, [list]) //eslint-disable-line




  return (
    <div>
      <div className="flex flex-wrap -mx-3 lg:-mx-6">
        {list.map(item => (
          <motion.div
            className={classNames("w-full sm:w-1/2 lg:w-1/3 p-8 md:p-6", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            key={item.id}
            initial="false"
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <Card {...item} />
          </motion.div>
        ))}
      </div>

    <div className="flex justify-center py-4">
      {hasMore &&  (
        <Button title="Load more" onClick={handleLoadMore} primary/>)
    }
    </div>

  </div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
