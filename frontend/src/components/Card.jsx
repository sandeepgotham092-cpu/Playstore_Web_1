import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div>
      <div className="card">
  <div className="card-header">
    <img alt="" className="card-img" src={`${props.img}`}/>
    <div className="card-text">
      <span className="card-title">{props.name}</span>
      <p className="card-desc">
        {props.description}
      </p>
      <p>☆ {props.stars}/5</p>
    </div>
  </div>

  <button className="card-btn">See More</button>
</div>
    </div>
  )
}

export default Card
