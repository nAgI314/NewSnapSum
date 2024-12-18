import React from "react";

import  {useState, useRef} from 'react';
import './Home.css'
import './App.css'
import { Gemini } from './gemini'
import ResCal from "./responseCalculate"
import PutNumber from "./putNumber";

const Home: React.FC = () => {
  const prompt = "Please extract the numbers visible in the image. For each number, provide the coordinates relative to the image, assuming the top-left corner has coordinates x=0, y=0, and the bottom-right corner has coordinates x=1, y=1. Output the results in the following format: {number: <extracted number>, x: <x-coordinate>, y: <y-coordinate>}. Ensure that each entry is on a new line and is formatted exactly as described. If a number includes a decimal point, ensure it is recognized as a decimal and handled accurately. Do not address or mention anything other than the specified output format.";

  const [photoData, setPhotoData] = useState<string | null>(null); // 撮影した写真のデータURL
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
        setPhotoData(null); // 撮影した写真をクリアしてビデオに戻す
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
        setPhotoData(photoData);

        // ビデオストリームを停止
        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());

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
  
  const reloadPage = () => {
    window.location.reload();
  };

  startCamera();
  return (
  <>
  <h1>SnapSum</h1>
  <div>
     {photoData ? (
          <div>
          <PutNumber image={photoData} response={result} />
          {/* <img src={photoData} alt="Captured" style={{ width: '100%', maxWidth: '500px' }} /> */}
          </div>
          ) : (
          <video ref={videoRef} style={{ width: '100%', maxWidth: '500px' }} />
        )}
    <canvas ref={canvasRef} style={{ display: 'none' }} />
  </div>
  <button onClick={capturePhoto}>撮る</button>
  <button onClick={reloadPage}>リセット</button>
  {result && <p>{result}</p>}
  <ResCal response={result}/>
  </>);
};

export default Home;