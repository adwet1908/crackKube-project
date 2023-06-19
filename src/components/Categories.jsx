import React from 'react'

export default function Categories(props) {
  return (
    <div className="category">
        <button type="button" className="btn btn-dark" style={props.style}>All</button>
        <button type="button" className="btn btn-dark" style={props.style}>Technology</button>
        <button type="button" className="btn btn-dark" style={props.style}>Education</button>
        <button type="button" className="btn btn-dark" style={props.style}>Lifestyle</button>
        <button type="button" className="btn btn-dark"style={props.style}>Healthcare</button>
        <button type="button" className="btn btn-dark"style={props.style}>Sport</button>
        <button type="button" className="btn btn-dark"style={props.style}>Food</button>
        <button type="button" className="btn btn-dark"style={props.style}>Dark</button>





        {/* <button style={props.style}>All</button>
        <button style={props.style}>technology</button>
        <button style={props.style}>Education</button>
        <button style={props.style}>Lifestyle</button>
        <button style={props.style}>Healthcare</button>
        <button style={props.style}>Sport</button>
        <button style={props.style}>Food</button> */}
    </div>
  )
}
