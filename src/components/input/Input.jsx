import React from "react";
import cl from "./Input.module.scss"

const Input = ({placeholder, type}) => {


    return(
        <div className={cl.inputContainer}>
            <input type={type} placeholder={placeholder}/>
            
        </div>
    )
}

export default Input;