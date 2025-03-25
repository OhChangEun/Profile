import React, { useState } from "react";

function Navigation({ sectionRef, timelineRef }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClick = ({ ref, num }) => {
    scrollToSection(ref);
    setActiveIndex(num);
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <div
              className={activeIndex === 0 ? "active" : null}
              onClick={() => onClick({ ref: sectionRef, num: 0 })}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className={activeIndex === 1 ? "active" : null}
              onClick={() => onClick({ ref: timelineRef, num: 1 })}
            >
              Profile
            </div>
          </li>
          <li>
            <div
              className={activeIndex === 2 ? "active" : null}
              onClick={() => onClick({ ref: sectionRef, num: 2 })}
            >
              Projets
            </div>
          </li>
          <li>
            <div
              className={activeIndex === 3 ? "active" : null}
              onClick={() => onClick({ ref: timelineRef, num: 3 })}
            >
              Learning & Growth
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
