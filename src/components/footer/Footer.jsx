import React from "react";
import cl from "./Footer.module.scss"
import logoFooter from "../../img/logoFooter.png"

const Footer = () => {


    return (
        <div className={cl.footerContainer}>
            <div className={cl.footerInfo}>
                <img src={logoFooter} />
                <div className={cl.pagesList}>
                    <h3>Информация</h3>
                    <span>Главная</span>
                    <span>Галерея</span>
                    <span>Проекты</span>
                    <span>Сертификаты</span>
                    <span>Контакты</span>
                </div>
                <div className={cl.contactList}>
                    <h3>Контакты</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;