import React from "react";
import classes from './FormPage.module.scss'

const FormPage = (props) => {
    
    const clickHandler = () => {
        props.toProject()
    }
    
    return(
        <React.Fragment>
            <button onClick={clickHandler} className={classes['prevButton']}>back</button>
            <form action="https://formspree.io/f/mayvjpbw" method="POST" className={classes} >
                <h4>Contact form.</h4>
                <input type='email' name="email" placeholder="yourmail@gmail.com">
                    {}
                </input>
                <textarea name="message" placeholder="Your message" maxLength="250" >

                </textarea>
                <button type="submit" className={classes['sendButton']}>Send</button>
            </form>
        </React.Fragment>
    )
}

export default FormPage