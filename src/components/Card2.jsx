import React from 'react'
import '../index.css'

export default function Card2(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.image} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h6 className='card-type'>{props.type}</h6>
                <p className="card-title">{props.title}</p>
                <p className="card-text">{props.text}</p>
                <a href="/" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}
