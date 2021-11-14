import React from "react"
import { useMediaQuery } from 'react-responsive'
import PropTypes from "prop-types"
import CardsMobile from "./CardsMobile"
import CardsDesktop from "./CardsDesktop"

const Cards = ({ items, hideLastItemOnMobile = false }) => {

const isMobile = useMediaQuery({ query: '(max-width: 599px)' })


return (
  <div>
{isMobile ?
(<CardsMobile items={items}/>)
  :
(<CardsDesktop items={items} />)
}
 
</div>
  )
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Cards
