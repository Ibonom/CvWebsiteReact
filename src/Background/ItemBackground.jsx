import React  from "react";
import classes from './ItemBackground.module.scss'

const ItemBackground = (props) => {

    return(
        <section className={classes.backgroundStyle}>
            {props.children}
        </section>
    )
} 

export default ItemBackground