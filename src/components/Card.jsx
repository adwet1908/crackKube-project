import React from "react";

function Card({ listData }) {
    return (
            <div className="card-container" style={{ width: "18rem" }}>
                {listData.map((item) => (
                    <React.Fragment key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.alt} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.text}</p>
                            <a href="/" className="btn btn-primary card-button">
                                {item.button}
                            </a>
                        </div>
                    </React.Fragment>
                ))}
            </div>
    );
}


export default Card;
