import React from 'react'
import SpeechText from '../components/SpeechText.js'
import HandTracking from '../components/HandTracking.js'
import '../App.css'

const Recording = () => {
  return (
    <>
    <div className="recording-header">
    <div className='camera-container'> 
        <HandTracking/>
    </div>
    <div className="recording-container">
        <SpeechText />
    </div>
    </div>
    
    
    </>
    
  )
}

export default Recording