import React from 'react'


const Service = ({paraText,icon,titleText}) => {
  return (
    <article className="service">
    <span className="service-icon">
      {icon}
    </span>
    <div className="service-info">
      <h4 className="service-title">{titleText}</h4>
      <p className="service-text">{paraText}</p>
    </div>
  </article>
  )
}

export default Service