import React from 'react'

export default function Categories(props) {
  return (
    <div className="category">
        <button style={props.style}>All</button>
        <button style={props.style}>technology</button>
        <button style={props.style}>Education</button>
        <button style={props.style}>Lifestyle</button>
        <button style={props.style}>Healthcare</button>
        <button style={props.style}>Sport</button>
        <button style={props.style}>Food</button>
    </div>
  )
}
