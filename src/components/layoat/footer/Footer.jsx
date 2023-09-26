import React from 'react';
import "./Footer.module.css"
import styles from "./Footer.module.css"
import Visa from "../../../assets/footer-visa.png"

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>
                <p>© Все права защищены <br/>
                    Политика конфиденциальности <br/>
                    Публичная оферта
                </p>
            </div>

            <div className={styles.footerIcon}>
                <h4>
                    Телефон: <br/>
                    <a href="tel:+996704448866">+996704448866</a>
                </h4>
                <h4>
                    E-mail: <br/>
                    <a href="mailto:bekturchik03@gmail.com">bekturchik03@gmail.com</a>
                </h4>
                <div className={styles.footerMeta}>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
                    <img src={Visa} />
            </div>
        </div>
    );
}

export default Footer;