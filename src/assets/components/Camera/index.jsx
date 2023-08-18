import React, { useCallback, useRef, useState } from "react";
import './css/style.css';
// import { Camera } from "react-camera-pro/dist/components/Camera/Camera";
import Webcam from "react-webcam";

// Камера
export function CameraContainer() {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [captureFlag, setCaptureFlag] = useState(true);
    const arrayPhoto = [];

    // Обработчик "Сделать фото"
    const handlerCreateCapture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        console.log(arrayPhoto);
    }, [webcamRef]);

    // Обработчик "Сохранить фото"
    const handlerSaveCaptuer = () => {
        arrayPhoto.push(imgSrc);
        setImgSrc(null);

        console.log(arrayPhoto);
    }

    // Обработчик "Удалить фото"
    const handlerDeleteCaptuer = () => {
        setImgSrc(null);
        console.log(arrayPhoto);
    }

    return (
        <>
            <h1>Камера</h1>
            <div className="camera-container">
                <div className="container">
                    {imgSrc ? (
                        <img src={imgSrc} alt="webcam" />
                    ) : (
                        <Webcam height={600} width={600} ref={webcamRef} />
                    )}
                    <div className="btn-container">
                        {/* {!captureFlag ?? <button onClick={handlerCreateCapture}>Сделать фото</button>} 
                       {captureFlag ??<button onClick={handlerSaveCaptuer}>Сохранить фото</button>} 
                       {captureFlag ??<button onClick={handlerDeleteCaptuer}>Удалить фото</button>}  */}
                        <button onClick={handlerCreateCapture}>Сделать фото</button>
                        <button onClick={handlerSaveCaptuer}>Сохранить фото</button>
                        <button onClick={handlerDeleteCaptuer}>Удалить фото</button>
                    </div>
                </div>

            </div>
        </>
    )
}