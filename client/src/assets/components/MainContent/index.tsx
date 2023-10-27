import React, { useState } from "react";
import "./css/style.css";
// import { useRequest } from "../../hook/useAudioArray";
// import { useRequestData } from "../../data/exemple";
// import { useRequestArray } from "../../hook/useAudioArray";
import axios from "axios";
// import { useExempleState } from "../../hook/useStateExemple";
// import { Route, Routes } from "react-router-dom";
// import { Slider } from "../Slider";
// import AudioPlayer from "../AudioPlayer";
// import { CameraContainer } from "../Camera";
// const [response, setResponse] = useState();
// const setexemple = useExempleState();
// const array = useRequest('http://localhost:2010/api/desition-system/rules')
// useRequestArray('http://localhost:2010/api/desition-system/rules');
// const {requestArray } = useRequestData('http://localhost:2010/api/desition-system/rules');
// useRequestData('http://localhost:2010/api/desition-system/rules')
// const requestArray  = useRequestData('api/desition-system/rules');
// const arrayImagePortfolio = useRequestArray(urlPortfolioImagesApi).requestArray;
// const response = await axios.get('http://localhost:2010/api/desition-system/rules');

async function featchArray() {
    try {
        const response: any = await axios.get('http://localhost:2010/api/desition-system/rules');
        // setResponse(response);
        // setexemple(response);
        // console.log(response.body);
    } catch (error) {
        console.log(error);
    }
}

featchArray();

console.log();
console.log("Модель пользователя");
console.log(
    {
        country: "Страна",
        typeDirection: "Тип направления", // haveBitch: "По", // haveExcursions: "Наличие экскурсий",
        fromPrice: "цена от",
        toPrice: "цено до",
        amountStars: "количество звёзд в отеле",
        amountNights: "количество ночей",
        amountAdult: "количество взрослых",
        amountChildrens: "Количество детей",
        datedepartureIn: "Дата прибытия",
    }
);

console.log();
console.log("Модель решения");
console.log(
    {
        nameHotel: "Название отеля",
        country: "Страна",
        priceTotal: "Цена",
        amountStars: "количество звёзд в отле",
        haveBitch: "Наличие пляжа",
        haveExcursions: "Наличие экскурсий",
        datedepartureIn: "Дата прибытия",
        datedepartureOut: "Дата вылета",
    }
);

export function MainContent() {
    return (
        <>
            <div className="main-content-conteiner">
                {/* <Routes>
                    <Route path="/" element={<Slider />}></Route>
                    <Route path="/audio" element={<AudioPlayer />}></Route>
                    <Route path="/camera" element={<CameraContainer />}></Route>
                </Routes> */}
            </div>
        </>
    )
}