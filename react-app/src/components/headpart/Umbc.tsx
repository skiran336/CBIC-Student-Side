import React from 'react'
import "./Umbc.css"

//This is used to add UMBC heading at the top of page
function Umbc () {
  return (
    <div className="black-box">
      <a href = "https://www.umbc.edu/" target='blank'>
      <img src = "https://entrepreneurship.umbc.edu/wp-content/themes/sights/images/apple-touch-icon.png" />
      <span className='text'>UMBC</span>
      </a>
    </div>
  )
}

export default Umbc
