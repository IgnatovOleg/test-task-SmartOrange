import React from "react";
import cl from "./AboutCompany.module.scss";
import companyFirst from "../../img/companyFirst.png"
import companySecond from "../../img/companySecond.png"
import companyThird from "../../img/companyThird.png"
import rightArrow from "../../img/rightArrow.svg"


const AboutCompany = () => {


    return(
        <div className={cl.aboutCompanyContainer}>
            <div className={cl.firstImg}>
                <img src={companyFirst} />
                <img src={companySecond} />
            </div>
            <div className={cl.secondImg}>
                <img src={companyThird} />
            </div>
            <div className={cl.description}>
                <h2>О компании</h2>
                <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h5>
                <span>ЧИТАТЬ <img src={rightArrow} /></span>
            </div>
        </div>
    )
}

export default AboutCompany;