import React from "react";
import logo from './image/logo.png';
import './css/style.css';

export function HeaderInformation() {
    return (
        <div className="header-information">
            <img src={logo}  alt="logo" />
            <h1>Подбор тура</h1>
        </div>
    );
}
