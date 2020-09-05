import React, { Component } from "react";
import "./spinner.css";

class Spinner extends Component {
  state = {
    name: "circle",
  };

  // add rotate class to start animation
  startRotation = () => {
    const circle = document.getElementById("circle");
    circle.style.transform = "unset";

    this.setState({
      name: "circle rotate",
      rotate: true,
    });
    // random timeout for stopping animation
    setTimeout(() => {
      this.setState({
        name: "circle",
      });

      // generate random reward_id
      var id = Math.floor(Math.random() * 10) % 8;
      console.log(id);
      var angle = id * 45;
      console.log(angle);

      circle.style.transform = `rotate(${angle}deg)`;
    }, Math.floor((Math.random() * 8 + 1) * 1000));
  };

  render() {
    return (
      <div>
        <div className="circle-container">
          <div className="arrow"></div>
          <ul className={this.state.name} id="circle">
            <li index="1">
              <div className="text">
                <small>
                  Better Luck <br></br>next time
                </small>
              </div>
            </li>
            <li index="2">
              <div className="text">
                2X <br></br>
                <small>savings</small>
              </div>
            </li>
            <li index="3">
              <div className="text">
                Rs 100 <br></br>
                <small>cashback</small>
              </div>
            </li>
            <li index="4">
              <div className="text">Rs 20</div>
            </li>
            <li index="5">
              <div className="text">Rs 50</div>
            </li>
            <li index="6">
              <div className="text">
                1.5X <br></br>
                <small>savings</small>
              </div>
            </li>
            <li index="7">
              <div className="text">
                2X <br></br>
                <small>savings</small>
              </div>
            </li>
            <li index="8">
              <div className="text">Rs 50</div>
            </li>
          </ul>
          <button className="spin-btn" onClick={this.startRotation}>
            Spin
          </button>
        </div>
      </div>
    );
  }
}

export default Spinner;
