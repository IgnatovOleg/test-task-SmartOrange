import React from "react";
import cl from "./HomeInfo.module.scss";
import home from "../../img/home.png"
import leftArrow from "../../img/leftArrow.svg"
import rightArrow from "../../img/rightArrow.svg"

const HomeInfo = () => {



    return (
        <div className={cl.homeInfoContainer}>
            <div className={cl.slideInfo}>
                <h1>PROJECT</h1>
                <h2>HOME</h2>
                <div className={cl.sliderControlUnit}>
                    <div className={cl.arrows}>
                        <div className={cl.arrow}>
                            <img src={leftArrow}/>
                        </div>
                        <div className={cl.arrow}>
                            <img src={rightArrow} />
                        </div>
                    </div>
                    <div className={cl.line}></div>
                </div>
                <div className={cl.counter}>
                    <span>01</span>
                    <div className={cl.line}></div>
                    <span>02</span>
                </div>
            </div>
            <div className={cl.slideImg}>
                <img src={home} />

            </div>
        </div>
    )
}

export default HomeInfo;