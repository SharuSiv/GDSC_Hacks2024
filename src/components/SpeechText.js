import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './SpeechText.css';
import GestureContext from './GestureContext';
// import GenerateNote from '../../server/GenerateNote';

const audioBlobToBase64   = async (blob) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      const arrayBuffer = reader.result;
      const base64Audio = btoa(
        new Uint8Array(arrayBuffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      resolve(base64Audio);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
};

const SpeechText = () => {
  const [note, setNote] = useState(null); 

  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState(null);
  const {gesture,setGesture} = useContext(GestureContext);

  useEffect(() => {
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaRecorder]);

  // useEffect(() => {
  //   if (gesture === 'new_line') {
  //     setTranscription(transcription + '\n');
  //     console.log('New line added');
  //     setGesture(null);
  //   }
  // }, [gesture]);

  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const startRecording = async () => {
    try {

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.start();
      console.log('Recording started');

      recorder.addEventListener('dataavailable', async (event) => {
        console.log('Data available event triggered');
        const audioBlob = event.data;

        const base64Audio = await audioBlobToBase64(audioBlob);

        try {
          const response = await axios.post(
            `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`,
            {
              config: {
                encoding: 'WEBM_OPUS',
                sampleRateHertz: 48000,
                languageCode: 'en-US',
              },
              audio: {
                content: base64Audio,
              },
            }
          );

          // if (response.data.results && response.data.results.length > 0) {
          //   setTranscription(response.data.results[0].alternatives[0].transcript);
          // } else {
          //   console.log('No transcription results in the API response:', response.data);
          //   setTranscription('No transcription available');
          // }
          if (response.data.results && response.data.results.length > 0) {
            const transcript = response.data.results[0].alternatives[0].transcript;
            const words = transcript.split(' ');
            let formattedTranscript = '';
            for (let i = 0; i < words.length; i++) {
              if (i > 0 && i % 5 === 0) {
                formattedTranscript += '\n';
              }
              formattedTranscript += words[i] + ' ';
            }
            setTranscription(formattedTranscript);
            console.log('Transcription:', formattedTranscript);
          } else {
            console.log('No transcription results in the API response:', response.data);
            setTranscription('No transcription available');
          }
        } catch (error) {
          console.error('Error with Google Speech-to-Text API:', error.response.data);
          setError('Error transcribing audio');
        }
      });

      setRecording(true);
      setMediaRecorder(recorder);
    } catch (error) {
      console.error('Error getting user media:', error);
      setError('Error accessing microphone');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      console.log('Recording stopped');
      setRecording(false);
    }
  };

  const generateNote = async () => {
    //GenerateNote(transcription)
    const generatedNote = (
      <div>
        <p>*Apples have a sweet and pleasant taste.</p>
        <br/>
        <p>*Lemons have a sharp, acidic taste.</p>
      </div>
      )
      setNote(generatedNote);}



  return (
    <div>
      <div>
    
      </div>
      <div className="button-container">
        <button onClick={startRecording} disabled={recording}>
          Start Recording
        </button>
        <button onClick={stopRecording} disabled={!recording}>
          Stop Recording
        </button>
      </div>
      {error && <div>Error: {error}</div>}
      <div>
  {transcription.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ))}
  {transcription && ( <button className='generate-note' onClick={generateNote}>Generate Note</button>)}
    </div>
    <br/>
    {note} 
    </div>
  );
};

export default SpeechText;
