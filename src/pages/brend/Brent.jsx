import React from 'react';
import style from "./Brent.module.css"
import brentImg from "../../assets/brent-img.png"
import brentImg2 from "../../assets/brent-img2.png"
import {Link} from "react-router-dom";

function Brent() {
    return (
        <div>
            <h1 className={style.brentText}>О бренде</h1>
            <div className={style.brentBox}>
                <div>
                    <img src={brentImg} />
                </div>

                <div className={style.brentTexts}>
                    <h2>Идея и женщина</h2>
                    <p>
                        Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
                        <br/>
                        <br/>
                        Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
                    </p>
                </div>
            </div>

            <div className={style.brentBox}>
                <div className={style.brentTexts}>
                    <h2>Магия в деталях</h2>
                    <p>
                        Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
                        <br/>
                        <br/>
                        Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.
                    </p>
                </div>

                <div>
                    <img src={brentImg2} />
                </div>
            </div>

            <center><Link to="/shop"><button className={style.brentBtn}>Посмотреть коллекцию</button></Link></center>
        </div>
    );
}

export default Brent;