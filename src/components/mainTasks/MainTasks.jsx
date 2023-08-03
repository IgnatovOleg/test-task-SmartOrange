import React from "react";
import cl from "./MainTasks.module.scss";
import one from "../../img/one.png"
import two from "../../img/two.png"


const MainTasks = () => {


    return (
        <div className={cl.mainTasksContainer}>
            <h2>Основные задачи</h2>
            <div className={cl.contant}>
                <div className={`${cl.contantDescription} ${cl.sizeBoxFirst}`}>
                    <img src={one} />
                    <span>Создание комфортных условий и повышение качества обслуживания клиентов</span>
                </div>
                <div className={`${cl.contantDescription} ${cl.sizeBoxSecond}`}>
                    <img src={two} />
                    <span>Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</span>
                </div>
            </div>
        </div>
    )
}
export default MainTasks;