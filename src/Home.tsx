import React from "react";

import  {useState, useRef} from 'react';
import './Home.css'
import './App.css'
import { Gemini } from './gemini'
import ResCal from "./responseCalculate"

const Home: React.FC = () => {
  const prompt ="Please tell me all the numbers you see in the picture.You do not need to say anything other than the numbers.Pay attention to the decimal points." 

  const [result, setResult] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  

  // Start the camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }  // 外カメラ（リアカメラ）を選択
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  // Capture the photo
  const capturePhoto = async () => {
    
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current!;
      const video = videoRef.current!;

      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const photoData = canvas.toDataURL('image/png');
        const file = dataURLtoFile(photoData, `photo-${Date.now()}.png`)
        const resultFromGemin = await Gemini(file,prompt);
        setResult(resultFromGemin);
      }
    }
  };
  
  const dataURLtoFile = (dataURL: string, filename: string): File => {
    const arr = dataURL.split(",");
    const mimeMatch = arr[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  
  return (
  <>
  <h1>SnapSum</h1>
  <div>
    <video ref={videoRef} style={{ width: '100%', maxWidth: '500px' }} />
    <canvas ref={canvasRef} style={{ display: 'none' }} />
  </div>
  <button onClick={startCamera}>Start Camera</button>
  <button onClick={capturePhoto}>Capture Photo</button>
  {result && <p>{result}</p>}
  <ResCal/>
  </>);
};

export default Home;