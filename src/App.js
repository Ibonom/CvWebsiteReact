import React, { useState } from "react";
import FrontPage from "./FrontPage/FrontPage";
import Background from "./Background/Background";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import FormPage from "./FormPage/FormPage";

function App() {

  const [scroll, setScroll] = useState(false)
  const [site, setSite] = useState('front')

  const frontHandler = (frontPageValue) => {
    setTimeout(() => {
      frontPageValue ? setSite('secondPage') : setSite('front')
    }, 1000);

  }
  const secondHandler = () => {
    setSite('thirdPage')
    setScroll(true)
  }

  const thirdHandler = () => {
    setSite('projectPage')

  }

  const projectHandlerToThird = () => {
    setSite('thirdPage')
  }

  const projectHandlerToForm = () => {
    setSite('formPage')
    setScroll(false)
  }

  const toProject = () => {
    setSite('projectPage')
    setScroll(true)
  }



  return (
    <Background transparency={scroll}>
      {site === 'front' && <FrontPage frontCheck={frontHandler} />}
      {site === 'secondPage' && <SecondPage secondCheck={secondHandler} />}
      {site === 'thirdPage' && <ThirdPage thirdCheck={thirdHandler} />}
      {site === 'projectPage' && <ProjectPage toThird={projectHandlerToThird} toForm={projectHandlerToForm} />}
      {site === 'formPage' && <FormPage toProject={toProject} />}

    </Background>
  );
}

export default App;
