import { useRef } from "react";
import Navigation from "../components/navigation";
import Home from "../components/Home";
import Profile from "../components/timeline";

function Main() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  return (
    <>
      <Navigation sectionRef={sectionRef} timelineRef={timelineRef} />
      <div ref={sectionRef}>
        <Home />
      </div>
      <div ref={timelineRef}>
        <Profile />
      </div>
    </>
  );
}

export default Main;
