import React from "react";
import classNames from "classnames";
import * as styles from "../styles/button.module.css";


const Button = ({icon, hasIconRight, title, href, onClick, primary, full}) => {

  const className = classNames(
    [styles.button,
    primary ? styles.primaryBG : styles.normalBG,
    hasIconRight && styles.reverse,
    full && styles.full
    ])

 

        if (href)  { return (
          <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >

        <button
        className={className}
        >
           {!!icon && (
        <span
          className={classNames([
            styles.icon,
            hasIconRight && styles.iconRight,
          ])}
        >
          {icon}
        </span>
      )}

      <span>{title}</span>
      </button>
        </a>
        ) 

        } else  {

    return (

    <button
    className={className}
    onClick={onClick}
  >

      {!!icon && (
        <span
          className={classNames([
            styles.icon,
            hasIconRight && styles.iconRight,
          ])}
        >
          {icon}
        </span>
      )}

      <span>{title}</span>


  </button>
  )
};

}



export default Button;