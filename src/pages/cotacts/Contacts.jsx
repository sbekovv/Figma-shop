import React from 'react';
import style from "./Contacts.module.css"

function Contacts() {
    return (
        <div>
            <h1 className={style.contactsText}>Контакты</h1>

            <div className={style.contactsBox}>
                <div className={style.contact}>
                    <h1>
                        Телефон: <br/>
                        <br/>
                        <a href="tel:+996704448866">+996704448866</a>
                    </h1>
                </div>

                <div className={style.contact}>
                    <h1>
                        E-mail: <br/>
                        <br/>
                        <a href="mailto:bekturchik03@gmail.com">bekturchik03@gmail.com</a>
                    </h1>
                </div>

                <div className={style.contact}>
                    <h1>
                        Адрес: <br/>
                        <br/>
                        <a href="https://maps.google.com/maps?q=Адрес">г. Москва, 3-я улица Строителей, 25</a>
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Contacts;