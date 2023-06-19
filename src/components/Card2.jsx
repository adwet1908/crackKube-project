import React from 'react'

export default function Card2(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.image} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h3 className='card-type'>{props.type}</h3>
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.text}</p>
                <a href="/" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}
