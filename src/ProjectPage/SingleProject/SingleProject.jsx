import React from "react";
import classes from "./SingleProject.module.css";


const SingleProject = (props) => {
  const link = <a href={props.link} target="_blank" rel="noreferrer">
  Try me
</a>
  return (
    <section className={classes['previewImg']}>
      <nav>
        <p>{props.name}</p>
        <div>
          <a href={props.githubLink} target="_blank" rel="noreferrer">
            Github
          </a>
          {props.link.length > 0 ? link : <React.Fragment/> }
          
        </div>
      </nav>
      <article>
        <img src={props.img} alt="project" />
        <p>{props.describe}</p>
      </article>
    </section>
  );
};

export default SingleProject;
