import React from 'react'
import img from '../img/girl.jpg'

const About = () => {
  return (
    <> 
        <div className='about'>
        <div className='mission'>
          <h3>About Us</h3>
          <h1>Who are we? We are Note Ease!</h1>
          <p>Note Ease is here to help make your life easier. Why bother typing notes when you can have AI write it for you! WIth the simple movement of your hand the world (word doc) is literally in the power of your hands! Amazing right? Why not give us a try? We promise it will be worth it!</p>
          <br/>
          <button>Register for free!</button>
        </div>
        <div className='about-img'>
          <img src={img}/>
        </div>
        </div>

       
        
    </>
   
  )
}

export default About