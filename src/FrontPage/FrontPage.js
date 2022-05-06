import React from "react";
import classes from './FrontPage.module.css'




const FrontPage = (props) => {
    

    const CheckHandler = (event) => {
        props.frontCheck(event.target.checked)
    }
    

    return (

        <div className={classes['center--div']}>
            <h1>Welcome</h1>
            <p>Can we start?</p>
            <input className={classes['l']} type='checkbox' onChange={CheckHandler}></input>
        </div>


    )
}


export default FrontPage