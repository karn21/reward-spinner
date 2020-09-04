import React from "react";
import Spinner from "../components/spinner/Spinner";

function Main() {
  return (
    <div className="container">
      <div className="header">
        <p>
          <i className="fa fa-lg fa-angle-left" aria-hidden="true"></i> Your
          Rewards
        </p>
      </div>
      <div className="spinner">
        <Spinner></Spinner>
      </div>
      <div className="cta">
        <h3>Spin the wheel now to get rewarded</h3>
        <p>
          Tap on Spin or rotate the wheel anti-clockwise and release to start
          spinning
        </p>
      </div>
      <div className="footer">
        <h4>
          Have a question? <a href="http://karan.codes">Get help</a>
        </h4>
      </div>
    </div>
  );
}

export default Main;
