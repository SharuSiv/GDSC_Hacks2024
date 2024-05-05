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
   
    <div className='camera-container'> 
        <HandTracking/>
    </div>
    <br/>
    <div className="recording-container">
        <SpeechText />
    </div>

    </GestureContext.Provider>
    
  )
}

export default Recording