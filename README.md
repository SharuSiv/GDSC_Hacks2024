![Alt text](landingpage.png?raw=true "Optional Title")
_Why bother typing notes when you can have AI write it for you! With simple movement of your hand the world doc is literally in your hands! Amazing right! Give us a try! We promise it'll be worth it!_

## 💡 Inspiration
We at Note Ease saw the vast opportunity of expanding AI into the education, and took it to the next level with our full stack app, Note Ease. Throughout the journey we've come to acknowledge AI as much as it helps with careers can also start being an aid/guide to the new and upcoming generation of today. Through immersive lectures, timeless and effortless notetaking abilities, and it's use of AI, we've empowered an educational tool to aid in classroom learning and personalized notetaking abilities. 

During lectures, students tend to either listen to lectures and be selective of the key concepts and disregard the less important facts which usually end up surprising the student during examinations. However! what if we told you there's a way to combat this. Just what if we used AI to lend a ear to give you the opportunity to fully immerse yourself in the lesson while notetaking magically happens with the help of your friend AI. Combating student awareness during the lessons and providing another source of studying is a crucial goal which we chose to overcome throughout the project. 

## 🛠️ What it does
With Note Ease our overall app allows students the flexibility to listen to their profs while having AI assist and listen to the in class lecture readings to develop a transcript. During the developing of the transcript the user has the opportunity to format the notes to their liking by using Tensor Flow embedded into the website which tracks the students hand movement to add the indentation or the bullet point of the students choosing rather than manually type it out. This helps prevent the loss of important data from the class recording while also giving the student the opportunity to listen to the lecture while the notes are being taken care of by the AI. 

## 🧰 How we built it
With the use of **TensorFlow** and **Google Cloud** we've been able to create an environment to detect student hand gestures during their respective lessons or private study sessions to format verbal thoughts onto a pdf online.

In order to build this we've used:
- Tensor Flow
- Google Cloud
- Google Gemini
- MongoDB
- React
- Express
- Node.js

**Tensor Flow** was used to detect the hand gestures and keep track of which hand gesture associates with the provided formatting of the pdf notes. For examples the thumbs up allows you to start a bullet point list, whereas the thumbs down allows you to end the bullet point list and return back to paragraph notes. 

Similar to implement the **Tensor Flow** gestures the WebApp must allow for accepting raw audio from the users microphone and translating that in a transcript projected onto the web so **Tensor Flow** knows which key details/information it must turn into notes.

**Google Gemini** then follows up with translating the basic formatting from **Tensor flow** and the transcript from **Google Cloud Speech-to-Text API** to provide better worded/formatted notes with possible images upon key words within the produced pdf.

Which follows up with storing the notes into a database, **MongoDB**. It stores user information such as registration and login info. It also further saves the students notes and file organization structure creating an online workplace simulating several notes books or series of notebooks (notes of a specific subject or topic). 

Overall to help launch this WebApp we've utilized the **MERN stack** specifically using **React** to help with overall with the structure and integral coding components. Since react is a language used to help maintain structure and has a flexible powerful modular language. 

## ⚠️ Challenges we ran into
One of the main primary challenges we ran into during the collaboration of Note Ease is incorporating both the **Google Cloud Speech to Text API** and the **Tensor Flow** to simultaneously take into account of the hand gesture the user is making for the note formatting and obtaining the transcript for the notes through recognizing voice from a raw input. Throughout overcoming this challenges we've tried many different approaches such as delaying the time of the Tensor Flow to allow for WebApp to first hear the transcript required prior to creating the formatting or trying to integrate both simultaneously and somehow converting into a pdf file. Although obstacle seemed less likely to be solved throughout the duration of this hackathon we've come together as a team and worked through this obstacle and solved the problem one step at a time. At Note Ease just as it's easy to take notes we get through the challenges one step at a time!

## 🏆 Accomplishments that we're proud of
As a team, we've collectively collaborated although we're from different backgrounds within coding. As this is the first hackathon for most of our members we're proud to have attempted to create an impressive app that can allow students to feel at ease when it comes to note taking and paying attention in class. Although we all came from different backgrounds with different coding experiences we didn't let the differences stop us from making an incredible app which is being presented to you today. This app has been made with lots of attention and love hoping one day students will be able to use this in real time to help with their educational purposes.

In terms of coding wise tho, we are proud to have set up the beginning stages of MongoDB, as well as proud of working with React. Pretty much all of my team members were new to React and learning it was a challenge itself however with teamwork and determination we've been able to overcome this obstacle. Another coding aspect which we're proud of is the inclusion of Tensor Flow and Google Cloud Speech-to-Text API.

## 📑 What we learned
Overall, our team has learned how to properly use the MERN stack to develop a web application and how to use react in terms of syntax both front end and back end. We've also been able to successfully use API with the help of Google Cloud, and further learned what Tensor Flow is used for and embedded it on our site. 

## 🔮 What's next for Note Ease
- training the hand model further using Tensor Flow
- Getting started with Google Gemini (Vertex AI) to help convert pdf of raw transcript into desired format 
- Set-up MongoDB to store all notes and file setting
