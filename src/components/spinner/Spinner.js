import React, { Component } from "react";
import "./spinner.css";

class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="circle">
          <div className="arrow"></div>
          <ul>
            <li>
              <div className="text">
                <small>
                  Better Luck <br></br>next time
                </small>
              </div>
            </li>
            <li>
              <div className="text">
                2X <br></br>
                <small>savings</small>
              </div>
            </li>
            <li>
              <div className="text">
                Rs 100 <br></br>
                <small>cashback</small>
              </div>
            </li>
            <li>
              <div className="text">Rs 20</div>
            </li>
            <li>
              <div className="text">Rs 50</div>
            </li>
            <li>
              <div className="text">
                1.5X <br></br>
                <small>savings</small>
              </div>
            </li>
            <li>
              <div className="text">
                2X <br></br>
                <small>savings</small>
              </div>
            </li>
            <li>
              <div className="text">Rs 50</div>
            </li>
          </ul>
          <button className="spin-btn">Spin</button>
        </div>
      </div>
    );
  }
}

export default Spinner;
