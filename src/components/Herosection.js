import React from "react";
import { Button } from "./Button";
import "./Herosection.css";
import "../App.css";
import myVideo from "../videos/video-1.mp4";

function Herosection() {
  return (
    <div className="hero-container">
      <video src={myVideo} autoPlay loop muted />
      <h1>
        Adventure <span>awaits</span>
      </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Herosection;
