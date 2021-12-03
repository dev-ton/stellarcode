import PropTypes from "prop-types"
import React from "react"

const Button2 = ({ children, href, ...params }) => {
  const className =
    "bg-stellar-dark border-2 border-stellar-dark stellarButton p-3 text-xs text-white uppercase hover:shadow-xl h transition ease-in-out duration-150"

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button className={className} {...params}>
        {children}
      </button>
    )
  }
}

Button2.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

Button2.defaultProps = {
  href: null,
}

export default Button2
