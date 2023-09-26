import React from 'react';
import styles from "./Hero.module.css"
import HeroImg from "../../assets/Hero-img.png"
import {Link} from "react-router-dom";

function Hero() {
    return (
        <div className={styles.hero}>
               <div className={styles.heroText}>
                   <h1>Новые поступления в этом сезоне</h1>
                   <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                   <Link to="/shop"><button>Посмотреть коллекцию</button></Link>
               </div>

               <div className={styles.heroImg}>
                   <img src={HeroImg} />
               </div>
        </div>
    );
}

export default Hero;