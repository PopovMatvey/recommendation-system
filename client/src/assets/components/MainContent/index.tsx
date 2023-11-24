import React, { useState } from "react";
import "./css/style.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { SelectionTour } from "../SelectionTour";
import { AdminPanel } from "../AdminPanel";
import { Rules } from "../Rules";

let urlRules = 'http://localhost:2010/api/desition-system/rules';
let urlCountries = 'http://localhost:2010/api/desition-system/countries';
let arrayCountries: any = featchArrayCountries(urlCountries);




async function featchArrayRules(parURL: string) {
    try {
        const response: any = await axios.get(parURL);

        console.log(response.data.arrayRules);
        return response.data.arrayRules;
    } catch (error) {
        console.log(error);
    }
}

async function featchArrayCountries(parURL: string) {
    try {
        const response: any = await axios.get(parURL);

        console.log(response.data.arrayCountries);
        return response.data.arrayCountries;
    } catch (error) {
        console.log(error);
    }
}



// console.log(arrayRules);
console.log(arrayCountries);

// console.log();
// console.log("Модель пользователя");
// console.log(
//     {
//         country: "Страна",
//         typeDirection: "Тип направления", // haveBitch: "По", // haveExcursions: "Наличие экскурсий",
//         fromPrice: "цена от",
//         toPrice: "цено до",
//         amountStars: "количество звёзд в отеле",
//         amountNights: "количество ночей",
//         amountAdult: "количество взрослых",
//         amountChildrens: "Количество детей",
//         datedepartureIn: "Дата прибытия",
//     }
// );

// console.log();
// console.log("Модель решения");
// console.log(
//     {
//         nameHotel: "Название отеля",
//         country: "Страна",
//         priceTotal: "Цена",
//         amountStars: "количество звёзд в отле",
//         haveBitch: "Наличие пляжа",
//         haveExcursions: "Наличие экскурсий",
//         datedepartureIn: "Дата прибытия",
//         datedepartureOut: "Дата вылета",
//     }
// );


export function MainContent() {

    // const [beachRelax, setBeachRelax] = useState(false);
    // const [mountRelax, setmountRelax] = useState(false);
    // const [excursionsRelax, setExcursionsRelax] = useState(false);

    // const arrayHotels = [
    //     {
    //         nameHotel: "Hayat place",
    //         country: "Россия",
    //         amountStars: 5,
    //         haveBeach: false,
    //         haveExcurtions: true,
    //         price: 10000,
    //     },
    //     {
    //         nameHotel: "City park",
    //         country: "Россия",
    //         amountStars: 4,
    //         haveBeach: true,
    //         haveExcurtions: true,
    //         price: 15000,
    //     },
    //     {
    //         nameHotel: "Jumeira rotana",
    //         country: "ОАЭ",
    //         amountStars: 4,
    //         haveBeach: true,
    //         haveExcurtions: true,
    //         price: 20000,
    //     },
    //     {
    //         nameHotel: "Анкара",
    //         country: "Турция",
    //         amountStars: 4,
    //         haveBeach: true,
    //         haveExcurtions: true,
    //         price: 20000,
    //     },
    //     {
    //         nameHotel: "Antalia hotel",
    //         country: "Турция",
    //         amountStars: 5,
    //         haveBeach: true,
    //         haveExcurtions: false,
    //         price: 30000,
    //     },
    // ];

    // const handlerBeachRelax = (event: any) => {
    //     // setBeachRelax(!event.target.checked);
    //     // console.log(!event.target.checked)
    // }

    // const handlerMountRelax = (event: any) => {
    //     // setmountRelax(!event.target.checked);
    // }

    // const handlerExcursionsRelax = (event: any) => {
    //     // setExcursionsRelax(!event.target.checked);

    // }

    return (
        <>
            {/* <div className="main-content-conteiner">
                <div className="main-content-conteiner_form">
                    <h3>Страна</h3>
                    <select name="Страна" id="country-select">
                        <option value="Россия">Россия</option>
                        <option value="Тайланд">Тайланд</option>
                        <option value="Египет">Египет</option>
                        <option value="Греция">Греция</option>
                        <option value="Турция">Турция</option>
                        <option value="ОАЭ">ОАЭ</option>
                    </select>
                    <h3>Тип направления отдыха</h3>
                    {/* checked={beachRelax} checked={mountRelax} checked={excursionsRelax}*/}
            {/* <div className="main-content-conteiner_form__type-relax">
                        <div className="main-content-conteiner_form__type-relax___item">
                            <label htmlFor="beach-relax">Пляжный</label>
                            <input type="checkbox" id="beach-relax" onChange={handlerBeachRelax} />
                        </div>
                        <div className="main-content-conteiner_form__type-relax___item">
                            <label htmlFor="mount-relax">Горнолыжный</label>
                            <input type="checkbox" id="mount-relax" onChange={handlerMountRelax} />
                        </div>
                        <div className="main-content-conteiner_form__type-relax___item">
                            <label htmlFor="excursions-relax">Экскурсионный</label>
                            <input type="checkbox" id="excursions-relax" onChange={handlerExcursionsRelax} />
                        </div>
                    </div>

                    <h3>Цена от</h3>
                    <input type="number" className="number-field" min={0} max={100000} value={1000} />
                    <h3>Цена до</h3>
                    <input type="number" className="number-field" min={0} max={100000} value={10000000} />
                    <h3>Количество звёзд</h3>
                    <input type="number" className="number-field" min={1} max={5} value={5} />
                    {/* <h3>Дата прибытия</h3> */}
            {/* <input type="date" value={1.1}/> */}
            {/* <h3>Количество ночей</h3>
                    <input type="number" className="number-field" min={1} max={1000} value={1} />
                </div>
                <h2>Результат</h2> 
                                <div className="output-field"> */}
            {/* <div className="output-field_item">

                    </div>
                    <div className="output-field_item">
                        <h3>Hayat place</h3>
                        <span>Страна: Россия</span>
                    </div> */}
            {/* {
                arrayHotels.map((element: any, index: number) => (
                    // <>
                    <div className="output-field_item" key={index}>
                        <h3>{element.nameHotel}</h3>
                        <span>Страна: {element.country}</span>
                        <span>Количество звёзд: {element.amountStars}</span>
                        <span>Цена: {element.price}</span>
                        {element.haveBeach ? <span>Наличие пляжа: Имеется</span> : <span>Наличие пляжа: Отсутствует</span>}
                        {element.haveExcurtions ? <span>Наличие экскурсий: Имеются</span> : <span>Наличие экскурсий: Отсутствуют</span>}
                    </div>
                    // </>
                ))
            }

        </div > * /} */}
    {/*
                  nameHotel: "Hayat place",
        contry: "Россия",
        amountStars: 5,
        haveBeach: false,
        haveExcurtions: true,
        price: 10000, */}
    <Routes>
        <Route path="/" element={<SelectionTour />}></Route>
        <Route path="/admin" element={<AdminPanel/>}></Route>
        <Route path="/rule" element={<Rules/>}></Route>
    </Routes>
            {/* // </div> */}
        </>
    )
}