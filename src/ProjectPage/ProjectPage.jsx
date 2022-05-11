import React from "react";
import SingleProject from "./SingleProject/SingleProject";
import ProjectData from "./ProjectData";
import classes from "./ProjectPage.module.scss";
import ItemBackground from "../Background/ItemBackground";

const ProjectPage = (props) => {
  const clickHandler = () => {
    props.toThird();
  };

  const toFormHandler = () => {
    props.toForm();
  };

  return (
    <React.Fragment>
      <nav className={classes["navButtons"]}>
        <button onClick={clickHandler}>Back to profile</button>
        <button onClick={toFormHandler}>Contact with me</button>
      </nav>
      <ul className={classes["gallery"]}>
        {ProjectData.map((object) => (
          <ItemBackground>
            <li key={object.id}>
              <SingleProject
                name={object.name}
                link={object.link}
                githubLink={object.githubLink}
                img={object.img}
                describe={object.describe}
              />
            </li>
          </ItemBackground>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ProjectPage;
