import React, { useEffect, useState } from "react";
import "./CardContainer.css"; // Import CSS for styling

const CardContainer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const container1Style = () => {
    if (scrollPosition < 400) {
      return { backgroundColor: "black" };
    } else if (scrollPosition > 400 && scrollPosition < 800) {
      return { backgroundColor: "green" };
    } else if (scrollPosition > 800 && scrollPosition < 1200) {
      return { backgroundColor: "blue" };
    } else if (scrollPosition > 1200) {
      return { backgroundColor: "#36454F" };
    }
  };

  const blurRadius = () => {
    // Adjust these values as needed to control the blur effect
    const maxBlur = 10; // Maximum blur radius
    const startBlurScroll = 50; // Scroll percentage to start blurring
    const endBlurScroll = 80; // Scroll percentage to end blurring

    if (scrollPosition >= startBlurScroll && scrollPosition <= endBlurScroll) {
      const blurAmount =
        ((scrollPosition - startBlurScroll) /
          (endBlurScroll - scrollPosition)) *
        maxBlur;
      return blurAmount;
    } else if (scrollPosition < startBlurScroll) {
      return 0; // No blur before reaching the starting point
    } else {
      return maxBlur; // Maximum blur after reaching the ending point
    }
  };

  const blurStyle = {
    filter: `blur(${blurRadius()}px)`,
  };

  return (
    <div>
      <div className="card-container " style={container1Style()}>
        <div className="card0">
          <div className="sub-carda">
            <img
              src={require("./linkedin.png")}
              alt="ALT"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="sub-cardb">
            <div className="sub-cardb1" style={container1Style()}>
              <h3>PROJECT NAME</h3>
            </div>
            <div className="sub-cardb2" style={container1Style()}>
              <p>Description of Sub Card 2...</p>
            </div>
          </div>
          <div className="sub-cardc" style={container1Style()}>
            <h3>Sub Card 3</h3>
            <p>Description of Sub Card 3...</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card0">
          <div className="sub-carda">
            <h3>Sub Card 1</h3>
            <p>Description of Sub Card 1...</p>
          </div>
          <div className="sub-cardb">
            <div className="sub-cardb1" style={container1Style()}>
              <h3>Sub Card 2</h3>
              <p>Description of Sub Card 2...</p>
            </div>
            <div className="sub-cardb2" style={container1Style()}>
              <h3>Sub Card 2</h3>
              <p>Description of Sub Card 2...</p>
            </div>
          </div>
          <div className="sub-cardc" style={container1Style()}>
            <h3>Sub Card 3</h3>
            <p>Description of Sub Card 3...</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card0">
          <div className="sub-carda">
            <h3>Sub Card 1</h3>
            <p>Description of Sub Card 1...</p>
          </div>
          <div className="sub-cardb">
            <div className="sub-cardb1" style={container1Style()}>
              <h3>Sub Card 2</h3>
              <p>Description of Sub Card 2...</p>
            </div>
            <div className="sub-cardb2" style={container1Style()}>
              <h3>Sub Card 2</h3>
              <p>Description of Sub Card 2...</p>
            </div>
          </div>
          <div className="sub-cardc" style={container1Style()}>
            <h3>Sub Card 3</h3>
            <p>Description of Sub Card 3...</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card0">
          <div className="sub-carda">
            <h3>Sub Card 1</h3>
            <p>Description of Sub Card 1...</p>
          </div>
          <div className="sub-cardb">
            <div className="sub-cardb1" style={container1Style()}>
              <h3>Sub Card 2</h3>
              <p>Description of Sub Card 2...</p>
            </div>
            <div className="sub-cardb2" style={container1Style()}>
              <h3>Sub Card 2</h3>
              <p>Description of Sub Card 2...</p>
            </div>
          </div>
          <div className="sub-cardc" style={container1Style()}>
            <h3>Sub Card 3</h3>
            <p>Description of Sub Card 3...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
