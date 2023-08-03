import React from "react";
import cl from "./ContactUs.module.scss"
import Input from "../input/Input.jsx"
import rightArrow from "../../img/rightArrow2.svg"
import call from "../../img/call.png"



const ContactUs = () => {



    return (
        <div className={cl.contactUsContainer}>
            <h2>Связаться с нами</h2>
            <div className={cl.formsBox}>
                <div className={cl.forms}>
                    <Input placeholder={"Имя"} type={"text"} star={"*"}/>
                    <Input placeholder={"Номер телефона"} type={"tel"}/>
                    <Input placeholder={"E-mail"} type={"email"}/>
                    <Input placeholder={"Интересующий товар/услуга"} type={"text"}/>
                    <textarea placeholder="Сообщение"></textarea>
                </div>
                <img src={call} />
            </div>
            <h4>Отправляя заявку Вы соглашаетесь
                с политикой
                конфиденциальности
            </h4>
            <span>ОТПРАВИТЬ <img src={rightArrow} /></span>
        </div>
    )
}

export default ContactUs;