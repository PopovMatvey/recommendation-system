import React from 'react';
import './css/style.css';

export function AdminPanel() {

    return (
        <>
            <div className="admin-panel_container">
                <h2>Панель администратора</h2>
                <div className="admin-panel_container__table">
                    <div className="admin-panel_container_row_menu">
                        <a href="#">Добавить</a>
                        <a href="#">Изменить</a>
                        <a href="#">Удалить</a>
                    </div>
                    <div className="admin-panel_container_row__title">
                        <div className="admin-panel_container_row__title__first">
                            <span>Первый Аргумент</span>
                        </div>
                        <div className="admin-panel_container_row__title__boolean">
                            <span>Булево</span>
                        </div>
                        <div className="admin-panel_container_row__title__second">
                            <span>Второй Аргумент</span>
                        </div>
                        <div className="admin-panel_container_row__title__result">
                            <span>Результат</span>
                        </div>
                    </div>
                    <div className="admin-panel_container_row">
                        <div className="admin-panel_container_row__first">
                            country = choosen_country
                        </div>
                        <div className="admin-panel_container_row__boolean">
                            -
                        </div>
                        <div className="admin-panel_container_row__second">
                            -
                        </div>
                        <div className="admin-panel_container_row__result">
                            hotel with choosen_country
                        </div>
                    </div>
                    <div className="admin-panel_container_row">
                        <div className="admin-panel_container_row__first">
                            amount_childs = choosen_amount_childs
                        </div>
                        <div className="admin-panel_container_row__boolean">
                            -
                        </div>
                        <div className="admin-panel_container_row__second">
                            -
                        </div>
                        <div className="admin-panel_container_row__result">
                            price for hotel  childs = (price for night * 0.5) choosen_amount_childs
                        </div>
                    </div>
                    <div className="admin-panel_container_row">
                        <div className="admin-panel_container_row__first">
                            amount_nights = choosen_amount_nights
                        </div>
                        <div className="admin-panel_container_row__boolean">
                            -
                        </div>
                        <div className="admin-panel_container_row__second">
                            -
                        </div>
                        <div className="admin-panel_container_row__result">
                            price_for_hotel = price_for_night *  amount_nights
                        </div>
                    </div>
                    <div className="admin-panel_container_row">
                        <div className="admin-panel_container_row__first">
                            amount_stars = choosen_amount_stars
                        </div>
                        <div className="admin-panel_container_row__boolean">
                            -
                        </div>
                        <div className="admin-panel_container_row__second">
                            -
                        </div>
                        <div className="admin-panel_container_row__result">
                            hotel with choosen_amount_stars
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}