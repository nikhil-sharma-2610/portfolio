import React, { useEffect, useState } from "react";
import CardContainer from "./cardcontainer";

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    if (scrollPosition < 400) return "#000000";
    else if (scrollPosition > 400 && scrollPosition < 800) return "#023020";
    else if (scrollPosition > 800 && scrollPosition < 1200) return "#191970";
    else if (scrollPosition > 1200) return "#000000";
  };

  return (
    <div style={{ marginTop: -20, marginBottom: -20 }}>
      <div style={{ backgroundColor: getBackgroundColor() }}>
        <CardContainer></CardContainer>
      </div>
    </div>
  );
};

export default Projects;
