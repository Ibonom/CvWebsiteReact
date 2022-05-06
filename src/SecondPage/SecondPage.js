import React, { useState } from "react";
import clasess from "./SecondPage.module.css";

const SecondPage = (props) => {
    const clickHandler = () =>{
        props.secondCheck()
    }

    const[name,setName] = useState('skip')

    setTimeout(()=>{setName('Continue')},20000)

  return (
    <React.Fragment>
        <button type="button" className={clasess['skipButton']} onClick={clickHandler}>{name}</button>
      <div className={clasess["position"]}>
        <div className={clasess["wrapper"]}>
          <div className={clasess["scroll-text"]}>
            <p>
              My name is Dawid Gucwa. For as long as I can remember, the digital
              world has been a big part of my life. My virtual adventure began
              with computer games, which have been my passion to this day. I
              started my journay from bulding computers, the so-called technical
              side, which developed my abilities as a self-taught person. My
              career path has always been indirectly linked to computers. From
              working in telemarketing sales, which offers digital services, to
              creating press images in a media analytics company.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SecondPage;
