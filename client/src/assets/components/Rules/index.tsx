import React from "react";
import './css/style.css';

export function Rules() {

    return (
        <>
            <div className="rules-container">
                <h2>Правило</h2>
                <label htmlFor="first-argument">Первый аргумент</label>
                <input type="text" id="first-argument" />
                <label htmlFor="boolean-simbol">Символ булева</label>
                <input type="text" id="boolean-simbol" />
                <label htmlFor="second-argument">Второй аргумент</label>
                <input type="text" id="second-argument" />
                <label htmlFor="result">Результат</label>
                <input type="text" id="result" />
                <input type="submit" value={"Добавить"} className="button"/>
            </div>
        </>
    )
}