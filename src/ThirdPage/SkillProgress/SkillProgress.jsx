import React from "react";
import classes from './SkillProgress.module.scss'

const SkillProgress = (props) => {

    return(
        <div className={classes['icons']}>
            <img src={props.img} alt="icon programming language"/>
            <div className={classes['bar']} >
                <div className={classes['progress']} style={{width:`${props.bar}`}}></div>
            </div>
        </div>
        
       
    )
}

export default SkillProgress