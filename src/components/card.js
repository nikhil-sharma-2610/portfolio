import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cardx">
      <div className="cards">
        <div className="cardz">
          <div className="card1">
            <h2>
              Final year student at Dr. B.R. Ambedkar National Institute of
              Technology
            </h2>
          </div>
          <div className="card1">
            <p className="q">Your</p>
            <p className="q">Friendly</p>
            <p className="q">Neighbourhood</p>
            <p className="q2">Web</p>
            <p className="q2">Developer</p>
          </div>
        </div>
        <div className="cardz">
          <div className="card1">
            <p className="c1">TECH-READY</p>
            <p className="c2">ALWAYS</p>
          </div>
          <div className="card1">
            <p className="w">Projects</p>
          </div>
        </div>
      </div>
      <div className="cardy">
        <div className="cardxlogo">
          <div className="logox">
            <img
              src={require("./github.png")}
              alt="ALT"
              style={{ maxWidth: "75%", maxHeight: "75%", height: "auto" }}
            />
          </div>
          <div className="logox">
            <img
              src={require("./linkedin.png")}
              alt="ALT"
              style={{ maxWidth: "75%", maxHeight: "75%", height: "auto" }}
            />
          </div>
        </div>
        <div className="cardxlogo">
          <div className="logox">
            <img
              src={require("./instagram.png")}
              alt="ALT"
              style={{ maxWidth: "75%", maxHeight: "75%", height: "auto" }}
            />
          </div>
          <div className="logox">
            <img
              src={require("./gmail.png")}
              alt="ALT"
              style={{ maxWidth: "75%", maxHeight: "75%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
