import React from "react"
import { Blob } from 'react-blob'


const BackgroundBlob = ({style, props}) =>
  <Blob size="60rem" animationDuration="50s"
    style={{
        backgroundColor: '#1F2041',
        float: 'right',
        opacity: 1,
        ...style
    }}
    {...props}
  />

export default BackgroundBlob 