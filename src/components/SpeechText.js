import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './SpeechText.css';

const audioBlobToBase64 = async (blob) => {
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
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [transcription, setTranscription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaRecorder]);

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

          if (response.data.results && response.data.results.length > 0) {
            setTranscription(response.data.results[0].alternatives[0].transcript);
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
        <p>Transcription: {transcription}</p>
      </div>
    </div>
  );
};

export default SpeechText;
