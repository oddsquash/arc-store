import React from 'react'
import './reviews.css'

export default function Review(props) {
    const { name, date, review, item } = props.data
    return (
        <div className='review dark-mode-text pt-4 mb-3'>
            <h4>{name}</h4>
            <h6>{date}</h6>
            <p>"{review}"</p>
            <p>Item Purchased:<br/>{item}</p>
        </div>
    )
}
