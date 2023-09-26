import React from 'react';
import style from "./Staff.module.css"
import Quirls from "../../assets/qirl.png"

function Staff() {
    return (
        <div className={style.staff}>
            <h1 className={style.staffText}>Команда мечты</h1>
            <div className={style.staffBox}>
                <div>
                    <img src={Quirls}/>
                </div>
                <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1" stroke="black"/>
                </svg>
                <div className={style.staffTexts}>
                    <h2>Для каждой</h2>
                    <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                        <br/>
                        <br/>
                        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства
                        каждой девушки.
                    </p>
                    <a href="#">Подробнее о бренде</a>
                </div>
            </div>
        </div>
    );
}

export default Staff;