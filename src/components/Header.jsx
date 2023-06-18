import React from 'react'
import Navbar from './Navbar'
import '../index.css'


export default function Header() {
  return (
    <div className='header-div'>
        <Navbar title = "Demo company"/>
        <h2 id='header-line'>We tackle interesting topics everyday</h2>
            <input type="search" className='searchbar' name="" placeholder='Find Courses'/>
    </div>
  )
}
