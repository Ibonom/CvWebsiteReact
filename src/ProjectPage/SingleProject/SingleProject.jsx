import React from "react";
import classes from "./SingleProject.module.scss";


const SingleProject = ({name,githubLink,link,img,describe}) => {
  const onlineLink = (
    <a
      className={classes["Button--modifyByLink"]}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      Try me
    </a>
  );
  return (
    <section className={classes.singleProject}>
      <nav>
        <p className={classes.singleProject__tittle}>{name}</p>
        <div className={classes.singleProject__links}>
          <a 
            className={classes["Button--modifyByLink"]}
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {link.length > 0 && onlineLink}
        </div>
      </nav>
      <article className={classes.content}>
        <img src={img} alt="project" className={classes.singleProject__img}/>
        <p className={classes.content__description}>{describe}</p>
      </article>
    </section>
  );
};

export default SingleProject;
