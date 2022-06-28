import React from "react";
import classes from "./SkillProgress.module.scss";

const SkillProgress = ({ img, barPercent }) => {
  return (
    <div className={classes.progressWrapper}>
      <img src={img} alt="icon programming language" className={classes.progressWrapper__img}/>
      <div className={classes.progressWrapper__bar}>
        <div
          className={classes.progress}
          style={{ width: barPercent }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
