import React from 'react'
import './Entryform.css'

const EntryForm = () => {
  return (
    <div>
      <div className='body-container'>
        <h1>CBIC Entry Form</h1>
      </div>
      <div className='note'>
        <p>Note: <span style={{color: 'red'}}>*</span> indiactes it is a required field</p>
      </div>
    </div>
  )
}

export default EntryForm
