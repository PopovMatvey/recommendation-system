import React from "react";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import { Slider } from "../Slider";
import AudioPlayer from "../AudioPlayer";
import { CameraContainer } from "../Camera";

export function MainContent() {
    return (
        <>
            <div className="main-content-conteiner">
                <Routes>
                    <Route path="/" element={<Slider />}></Route>
                    <Route path="/audio" element={<AudioPlayer />}></Route>
                    <Route path="/camera" element={<CameraContainer />}></Route>
                </Routes>
            </div>
        </>
    )
}