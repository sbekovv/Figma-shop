import React from 'react';
import style from "./Qualities.module.css"
import QualitiesImg1 from "../../assets/qualities-img1.png";
import QualitiesImg2 from "../../assets/qualities-img2.png";
import QualitiesImg3 from "../../assets/qualities-img3.png"

function Qualities() {
    return (
        <div className={style.qualities}>
            <h1 className={style.qualitiesText}>Что для нас важно</h1>
            <div className={style.qualitiesBlock}>
                <div className={style.qualitiesBox}>
                    <img src={QualitiesImg1} />
                    <h4>Качество</h4>
                    <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного
                        качества</p>
                </div>

                <div className={style.qualitiesBox}>
                    <img src={QualitiesImg2} />
                    <h4>Качество</h4>
                    <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного
                        качества</p>
                </div>

                <div className={style.qualitiesBox}>
                    <img src={QualitiesImg3}/>
                    <h4>Качество</h4>
                    <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного
                        качества</p>
                </div>
            </div>
        </div>
    );
}

export default Qualities;