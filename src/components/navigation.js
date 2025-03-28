import { useState, useEffect } from "react";

function Navigation({ homeRef, profileRef, projectRef, learningRef }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [homeRef, profileRef, projectRef, learningRef];

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClick = ({ ref, num }) => {
    scrollToSection(ref);
    setActiveIndex(num);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let currentIndex = 0;
      sections.forEach((ref, index) => {
        if (ref.current) {
          const { offsetTop, clientHeight } = ref.current;
          if (scrollPosition >= offsetTop - clientHeight / 2) {
            currentIndex = index;
          }
        }
      });

      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <div
              className={activeIndex === 0 ? "active" : null}
              onClick={() => onClick({ ref: homeRef, num: 0 })}
            >
              Home
            </div>
          </li>
          <li>
            <div
              className={activeIndex === 1 ? "active" : null}
              onClick={() => onClick({ ref: profileRef, num: 1 })}
            >
              Profile
            </div>
          </li>
          <li>
            <div
              className={activeIndex === 2 ? "active" : null}
              onClick={() => onClick({ ref: projectRef, num: 2 })}
            >
              Projects
            </div>
          </li>
          <li>
            <div
              className={activeIndex === 3 ? "active" : null}
              onClick={() => onClick({ ref: learningRef, num: 3 })}
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
