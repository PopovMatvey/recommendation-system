import React, { useState } from "react";
import "./css/style.css";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

/**
 * Компонент "Выбор тура"
 * @returns Выбор тура
 */
export function SelectionTour() {
    const [priceFrom, setPriceFrom] = useState(1000);
    const [priceTo, setPriceTo] = useState(1000000);
    const [amoutStars, setAmountStars] = useState(5);

    const arrayHotels = [
        {
            nameHotel: "Hayat place",
            country: "Россия",
            amountStars: 5,
            haveBeach: false,
            haveExcurtions: true,
            haveMountRelax: false,
            price: 10000,
        },
        {
            nameHotel: "City park",
            country: "Россия",
            amountStars: 4,
            haveBeach: true,
            haveExcurtions: true,
            haveMountRelax: false,
            price: 15000,
        },
        {
            nameHotel: "Jumeira rotana",
            country: "ОАЭ",
            amountStars: 4,
            haveBeach: true,
            haveExcurtions: true,
            haveMountRelax: false,
            price: 20000,
        },
        {
            nameHotel: "Анкара",
            country: "Турция",
            amountStars: 4,
            haveBeach: true,
            haveExcurtions: true,
            haveMountRelax: false,
            price: 20000,
        },
        {
            nameHotel: "Antalia hotel",
            country: "Турция",
            amountStars: 5,
            haveBeach: true,
            haveExcurtions: false,
            haveMountRelax: false,
            price: 30000,
        },
    ];

    let viewArray = [
        {
            nameHotel: "Hayat place",
            country: "Россия",
            amountStars: 5,
            haveBeach: false,
            haveExcurtions: true,
            haveMountRelax: false,
            price: 10000,
        },
    ];

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

    const handlerPriceFrom = (event: any) => {
        setPriceFrom(event.target.value);
    }

    const handlerPriceTo = (event: any) => {
        setPriceTo(event.target.value);
    }

    const handlerAmountStars = (event: any) => {
        setAmountStars(event.target.value);
    }

    const findDetermCountry = (parArray: any, parFindCountry: any) => {
        let returnedArray: any = [];

        for (let i = 0; i < parArray.length; i++) {
            if (parArray[i].country === parFindCountry) {
                returnedArray.push(parArray[i]);
            }
        }

        return returnedArray;
    }


    const findDetermAmountStars = (parArray: any, parFindAmountStars: any) => {
        let returnedArray: any = [];

        for (let i = 0; i < parArray.length; i++) {
            if (parArray[i].amountStars == parFindAmountStars) {
                returnedArray.push(parArray[i]);
            }
        }

        return returnedArray;
    }

    const findDetermValidPrice = (parArray: any, parPriceFrom: any, parPriceTo: any) => {
        let returnedArray: any = [];

        for (let i = 0; i < parArray.length; i++) {
            if ((parArray[i].price > Number(parPriceFrom)) && (parArray[i].price < Number(parPriceTo))) {
                returnedArray.push(parArray[i]);
            }
        }

        return returnedArray;
    }

    const findDetermAllExcurtions = (parArray: any, parHaveExcursions: any, parHaveBeach: any, parHaveMountRelax: any) => {
        let returnedArray: any = [];

        for (let i = 0; i < parArray.length; i++) {
            if ((parArray[i].haveExcurtions === parHaveExcursions)
                || (parArray[i].haveBeach === parHaveBeach)
                || (parArray[i].haveMountRelax === parHaveMountRelax)
            ) {
                returnedArray.push(parArray[i]);
            }
        }

        return returnedArray;
    }

    // const findDetermExcursions = (parArray: any, parHaveExcursions: any) => {
    //     let returnedArray: any = [];

    //     for (let i = 0; i < parArray.length; i++) {
    //         if (parArray[i].haveExcurtions === parHaveExcursions) {
    //             returnedArray.push(parArray[i]);
    //         }
    //     }

    //     return returnedArray;
    // }


    // const findDetermBeach = (parArray: any, parHaveBeach: any) => {
    //     let returnedArray: any = [];

    //     for (let i = 0; i < parArray.length; i++) {
    //         if (parArray[i].haveBeach === parHaveBeach) {
    //             returnedArray.push(parArray[i]);
    //         }
    //     }

    //     return returnedArray;
    // }


    // const findDetermMountRelax = (parArray: any, parHaveMountRelax: any) => {
    //     let returnedArray: any = [];

    //     for (let i = 0; i < parArray.length; i++) {
    //         if (parArray[i].haveMountRelax === parHaveMountRelax) {
    //             returnedArray.push(parArray[i]);
    //         }
    //     }

    //     return returnedArray;
    // }

    const handlerSubmitFindTour = (event: any) => {
        const selectConutryElement: any = document.querySelector('#country-select');
        const checkboxBeachRelaxElement: any = document.querySelector('#beach-relax');
        const checkboxMountRelaxElement: any = document.querySelector('#mount-relax');
        const checkboxExcursionRelaxElement: any = document.querySelector('#excursions-relax');
        const inputPriceFromElement: any = document.querySelector('#price-from');
        const inputPriceToElement: any = document.querySelector('#price-to');
        const inputAmountStarsElement: any = document.querySelector('#amount-stars');
        const inputAmountNightsElement: any = document.querySelector('#amount-nights');

        const outputField = createRoot(document.getElementById('outputField') as HTMLDivElement);

        viewArray = findDetermCountry(arrayHotels, selectConutryElement.value);
        viewArray = findDetermAmountStars(viewArray, inputAmountStarsElement.value);

        viewArray = findDetermValidPrice(viewArray, inputPriceFromElement.value, inputPriceToElement.value);
        viewArray = findDetermAllExcurtions(viewArray, checkboxExcursionRelaxElement.checked, checkboxBeachRelaxElement.checked, checkboxMountRelaxElement.checked);
        // viewArray = findDetermExcursions(viewArray, checkboxExcursionRelaxElement.checked);
        // viewArray = findDetermMountRelax(viewArray, checkboxMountRelaxElement.checked,);
        // viewArray = findDetermBeach(viewArray, checkboxBeachRelaxElement.checked,);

        outputField.render(
            <React.StrictMode>
                {
                    viewArray.map((element: any, index: number) => (
                        <div className="output-field_item" key={index}>
                            <h3>{element.nameHotel}</h3>
                            <span>Страна: {element.country}</span>
                            <span>Количество звёзд: {element.amountStars}</span>
                            <span>Цена: {element.price}</span>
                            {element.haveBeach ? <span>Наличие пляжа: Имеется</span> : <span>Наличие пляжа: Отсутствует</span>}
                            {element.haveExcurtions ? <span>Наличие экскурсий: Имеются</span> : <span>Наличие экскурсий: Отсутствуют</span>}
                            {element.haveMountRelax ? <span>Наличие горнолыжного отдыха: Имеется</span> : <span>Наличие горнолыжного отдыха: Отсутствует</span>}
                        </div>
                    ))
                }
            </React.StrictMode>
        )

        // console.log(selectConutryElement.value);
        // console.log(checkboxBeachRelaxElement.checked);
        // console.log(checkboxMountRelaxElement.checked);
        // console.log(checkboxExcursionRelaxElement.checked);
        // console.log(inputPriceFromElement.value);
        // console.log(inputPriceToElement.value);
        // console.log(inputAmountStarsElement.value);
        // console.log(inputAmountNightsElement.value);
    }

    return (
        <>
            <div className="main-content-conteiner">
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
                    <div className="main-content-conteiner_form__type-relax">
                        <div className="main-content-conteiner_form__type-relax___item">
                            <label htmlFor="beach-relax">Пляжный</label>
                            <input type="checkbox" id="beach-relax" />
                            {/* onChange={handlerBeachRelax} */}
                        </div>
                        <div className="main-content-conteiner_form__type-relax___item">
                            <label htmlFor="mount-relax">Горнолыжный</label>
                            <input type="checkbox" id="mount-relax" />
                            {/* onChange={handlerMountRelax} */}
                        </div>
                        <div className="main-content-conteiner_form__type-relax___item">
                            <label htmlFor="excursions-relax">Экскурсионный</label>
                            <input type="checkbox" id="excursions-relax" />
                            {/* 
                        onChange={handlerExcursionsRelax} 
                        value={1000}
                        value={10000000} 
                        value={5}
                        value={1}
                        */}
                        </div>
                    </div>
                    <h3>Цена от</h3>
                    <input type="number" className="number-field" id="price-from" min={1000} max={100000} value={priceFrom} onChange={handlerPriceFrom} />
                    <h3>Цена до</h3>
                    <input type="number" className="number-field" id="price-to" min={1000} max={100000} value={priceTo} onChange={handlerPriceTo} />
                    <h3>Количество звёзд</h3>
                    <input type="number" className="number-field" id="amount-stars" min={1} max={5} value={amoutStars} onChange={handlerAmountStars} />
                    {/* <h3>Количество ночей</h3>
                <input type="number" className="number-field" id="amount-nights" min={1} max={1000} value={1} /> */}
                    <input type="submit" value={"Найти тур"} className="input-button" onClick={handlerSubmitFindTour} />
                </div>
                <h2>Результат</h2>
                <div className="output-field" id="outputField">
                    {
                        viewArray.map((element: any, index: number) => (
                            <div className="output-field_item" key={index}>
                                <h3>{element.nameHotel}</h3>
                                <span>Страна: {element.country}</span>
                                <span>Количество звёзд: {element.amountStars}</span>
                                <span>Цена: {element.price}</span>
                                {element.haveBeach ? <span>Наличие пляжа: Имеется</span> : <span>Наличие пляжа: Отсутствует</span>}
                                {element.haveExcurtions ? <span>Наличие экскурсий: Имеются</span> : <span>Наличие экскурсий: Отсутствуют</span>}
                                {element.haveMountRelax ? <span>Наличие горнолыжного отдыха: Имеется</span> : <span>Наличие горнолыжного отдыха: Отсутствует</span>}
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}