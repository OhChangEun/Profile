import { useRef } from "react";
import Navigation from "../components/Navigation.js";
import Home from "../components/Home";
import Profile from "../components/timeline";
import Projects from "../components/Projects.js";
import Learning from "../components/Learning.js";

function Main() {
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const projectRef = useRef(null);
  const learningRef = useRef(null);

  return (
    <>
      <Navigation
        homeRef={homeRef}
        profileRef={profileRef}
        projectRef={projectRef}
        learningRef={learningRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={profileRef}>
        <Profile />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={learningRef}>
        <Learning />
      </div>
    </>
  );
}

export default Main;
