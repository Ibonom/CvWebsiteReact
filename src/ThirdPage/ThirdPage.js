import React from "react";
import classes from "./ThirdPage.module.css";
import face from "../Assets/me.jpg";
import SkillProgress from "./SkillProgress/SkillProgress";
import Icons from "./Icons";

const ThirdPage = (props) => {
  const txtBinary =
    "0001000001110000001010101011111111100000000000111110001111111100000000000000000000011111111100000000011111101010101011010100101100000000111110000000010000011100000010101010111111111000000000001111100011111111000000000000000000000111111111000000000111111010101010110101001011000000001111100000000100000111000000101010101111111110000000000011111000111111110001001001111100000111111100000000000000000000001111111110000000001111110101010101101010010110000000011111000000001000001110000001010101011111111100000000000111110001111111100000000000000000000011111111100000000011111101010101011010100101";

    const clickHandler = () => {
        props.thirdCheck()
    }

  return (
    <React.Fragment>
      <div className={classes["backgroundStyle"]}>
        <div className={classes["positionFlex"]}>
          <div className={classes["profilePicture"]}>
            <img src={face} alt="me" />
            <p>26Lvl</p>
          </div>
          <div className={classes["list"]}>
            <h2>Dawid Gucwa</h2>
            <ul>
              {Icons.map((object) => (
                <li key={object.name}>
                  <SkillProgress img={object.iconpng} bar={object.progress} />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes["binary"]}>
            <p>{txtBinary}</p>
          </div>
        </div>
        <div className={classes["nextSection"]}>
          <button onClick={clickHandler} >
            More information about me
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThirdPage;
