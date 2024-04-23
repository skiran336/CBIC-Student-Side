import React from 'react'
import './Entryform.css'

//This is used to display CBIC heading and add a note below it
function EntryForm() {
  return (
    <div>
      <div className='body-container'>
        <h1>CBIC Entry Form</h1>
      </div>
      <div className='note'>
        <p>Note: <span style={{color: 'red'}}>*</span> indicates it is a required field</p>
      </div>
    </div>
  )
}

export default EntryForm
