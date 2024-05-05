
import React from 'react'
import img from '../img/girl.jpg'
import imgacc from '../img/accessibility.png'
import imgHand from '../img/handshake.png'
import imgTime from '../img/save-time.png'

const About = () => {
  return (
    <> 
        <div className='about'>
  <div className='mission'>
    <h1>Who are we? We are Note Ease!</h1>
    <p>Note Ease is here to help make your life easier. Why bother typing notes when you can have AI write it for you! With the simple movement of your hand, the world (word doc) is literally in the power of your hands! Amazing right? Why not give us a try? We promise it will be worth it!</p>
    <br/>
    <button>Register for free!</button>
  </div>
  <div className='about-img'>
    <img src={img} alt="About Image" />
  </div>
</div>

<div class="icon-container">
  <div class="icon">
    <img src={imgacc} alt="Icon 1" />
    <p>High Accuracy Levels whether it's processing data, making predicting or providing recommendations</p>
  </div>
  <div class="icon">
    <img src={imgHand} alt="Icon 2" />
    <p>With the use of advanced AI algorithms we provide personalized assistance in note-taking</p>
  </div>
  <div class="icon">
    <img src={imgTime} alt="Icon 3" />
    <p>Excels in time management which helps increase productivity and organization</p>
  </div>
</div>   
    </>
  );
};

export default About;
