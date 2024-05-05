import React from 'react'
import SpeechText from '../components/SpeechText.js'
import HandTracking from '../components/HandTracking.js'
import '../App.css'
import { useState } from 'react';   
import GestureContext from '../components/GestureContext.js'


const Recording = () => {
    const [gesture, setGesture] = useState(null);

  return (
    <GestureContext.Provider value={{gesture,setGesture}}>
    <div className="recording-header">
    <div className='camera-container'> 
        <HandTracking/>
    </div>
    <div className="recording-container">
        <SpeechText />
    </div>
    
    </div>
    </GestureContext.Provider>
    
  )
}

export default Recording