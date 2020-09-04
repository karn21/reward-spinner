import React, { Component } from "react";
import "./spinner.css";

class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="arrow"></div>
        <ul className="circle">
          <li>
            <div className="text">Text 1</div>
          </li>
          <li>
            <div className="text">Text 2</div>
          </li>
          <li>
            <div className="text">Text 3</div>
          </li>
          <li>
            <div className="text">Text 4</div>
          </li>
          <li>
            <div className="text">Text 5</div>
          </li>
          <li>
            <div className="text">Text 6</div>
          </li>
          <li>
            <div className="text">Text 7</div>
          </li>
          <li>
            <div className="text">Text 8</div>
          </li>
        </ul>
        <button className="spin-btn">Spin</button>
      </div>
    );
  }
}

export default Spinner;
