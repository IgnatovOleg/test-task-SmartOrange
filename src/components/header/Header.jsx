import React from "react";
import cl from "./Header.module.scss";
import logo from "../../img/logo.svg"
import { Link } from "react-scroll";


const Header = () => {



    return (
        <div className={cl.headerContainer}>
            <img src={logo} />
            <div className={cl.menu}>
                <span className={cl.main}>ГЛАВНАЯ</span>
                <Link to="homeInfo" duration={500} smooth={true}>
                    <span>ГАЛЕРЕЯ</span>
                </Link>
                <Link to="ourProjects" duration={1000} smooth={true}>
                    <span>ПРОЕКТЫ</span>
                </Link>
                <Link to="aboutCompany" duration={1000} smooth={true}>
                    <span>СЕРТИФИКАТЫ</span>
                </Link>
                <Link to="footer" duration={1000} smooth={true}>
                    <span>КОНТАКТЫ</span>
                </Link>
            </div>
        </div>
    )
}

export default Header;