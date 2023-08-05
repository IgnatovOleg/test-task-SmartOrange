import React from "react";
import cl from "./Footer.module.scss"
import logoFooter from "../../img/logoFooter.png"
import location from "../../img/location.svg"
import phone from "../../img/phone.svg"
import mail from "../../img/mail.svg"
import fb from "../../img/fb.svg"
import twitter from "../../img/twitter.svg"
import linkedIn from "../../img/LinkedIn.svg"
import pinterest from "../../img/pinterest.svg"

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
                    <span className={cl.location}><img src={location} />100000, Республика  Казахстан,
                        г. Караганда, ул. Телевизионная 10</span>
                    <span className={cl.phone}><img src={phone} /> +38 (000) 000 00 00</span>
                    <span className={cl.mail}><img src={mail} />mail@gmail.com</span>
                </div>
                <div className={cl.socialMedia}>
                    <h3>Социальные сети</h3>
                    <div className={cl.icons}>
                        <img src={fb} className={cl.fb} />
                        <img src={twitter} className={cl.twitter} />
                        <img src={linkedIn} className={cl.linkedIn} />
                        <img src={pinterest} className={cl.pinterest} />
                    </div>
                </div>
            </div>
            <div className={cl.another}>
                © <span> 2019</span> Digital Project. Все права защищены.
            </div>
        </div>
    )
}

export default Footer;