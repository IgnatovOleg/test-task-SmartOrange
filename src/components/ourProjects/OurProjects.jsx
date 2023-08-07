import React from "react";
import cl from "./OurProjects.module.scss"
import rightArrow from "../../img/rightArrow2.svg"
import projectsFirst from "../../img/projectFirst.png"
import projectsSecond from "../../img/projectsSecond.png"
import projectsThird from "../../img/projectsThird.png"
import projectsFourth from "../../img/projectsFourth.png"
import projectsFifth from "../../img/projectsFifth.png"





const OurProjects = () => {



    return (
        <div className={cl.ourProjectsContainer}>
            <h3>Наши проекты</h3>
            <div className={cl.imagesProjects}>
                <div className={cl.backgroundImg}>
                    <div className={cl.another}>
                        <h2>ДОСУГОВЫЙ ЦЕНТР</h2>
                        <span>ПОДРОБНЕЕ <img src={rightArrow} /></span>
                    </div>
                    <img src={projectsFirst} className={cl.first} />
                </div>
                <img src={projectsSecond} className={cl.second} />
                <img src={projectsThird} className={cl.third} />
                <img src={projectsFourth} className={cl.fourth} />
                <img src={projectsFifth} className={cl.fifth} />
            </div>
            <h4>ВСЕ ПРОЕКТЫ <img src={rightArrow} /></h4>
        </div>
    )
}

export default OurProjects;