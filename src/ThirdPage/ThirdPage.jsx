import React from "react";
import classes from "./ThirdPage.module.scss";
import face from "../Assets/me.jpg";
import SkillProgress from "./SkillProgress/SkillProgress";
import Icons from "./Icons";
import ItemBackground from "../Background/ItemBackground";
import components from '../Assets/SCSS/Components/Button.module.scss'

const ThirdPage = (props) => {
  const clickHandler = () => {
    props.thirdCheck();
  };

  return (
    <ItemBackground>
      <section className={classes.skillSection}>
        <h2 className={classes.skillSection__name}>Dawid Gucwa</h2>
        <div className={classes.skillSection__mainWrapper}>
          <div className={classes.profileWrapper}>
            <img src={face} alt="me" className={classes.profileWrapper__img}/>
            <p className={classes.profileWrapper__lvl}>26Lvl</p>
          </div>
          <div className={classes["list"]}>
            <ul>
              {Icons.map((object) => (
                <li key={object.name}>
                  <SkillProgress img={object.iconpng} barPercent={object.progress} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div >
          <button className={components.Button} onClick={clickHandler}>More information about me</button>
        </div>
      </section>
    </ItemBackground>
  );
};

export default ThirdPage;
