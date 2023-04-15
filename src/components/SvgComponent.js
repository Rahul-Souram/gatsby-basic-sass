import React from 'react'
import Icons from "../assets/icons/icons.svg"

const SvgComponent = ({logo}) => {
  return (
    <div className="icon-container-inner">
    <svg className="icon-logo">
      <use
        xlinkHref={`${Icons}#icon-${logo}`}
      />
    </svg>
  </div>
  )
}

export default SvgComponent