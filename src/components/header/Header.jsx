import React from "react";
import cl from "./Header.module.scss";
import logo from "../../img/logo.svg"


const Header = () => {



    return (
        <div className={cl.headerContainer}>
            <img src={logo} />
            <div className={cl.menu}>
                <span className={cl.main}>ГЛАВНАЯ</span>
                <span>ГАЛЕРЕЯ</span>
                <span>ПРОЕКТЫ</span>
                <span>СЕРТИФИКАТЫ</span>
                <span>КОНТАКТЫ</span>
            </div>
        </div>
    )
}

export default Header;