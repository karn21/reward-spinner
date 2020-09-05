import React, { Component } from "react";
import "./spinner.css";
import axios from "axios";

class Spinner extends Component {
  state = {
    name: "circle",
  };

  // add rotate class to start animation
  startRotation = () => {
    // get wheel and set initial rotation = 0
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

      // generate angle from reward_id
      var angle = id * 45;
      console.log(angle);

      // rotate wheel by angle
      circle.style.transform = `rotate(${angle}deg)`;
      if (!Date.now) {
        Date.now = function () {
          return new Date().getTime();
        };
      }

      var timestamp = new Date().toLocaleString();

      var data = ["pwa-web-client", timestamp, id + 1];

      // post data to google sheets
      var accessToken = "";
      const secretKey = process.env.REACT_APP_SECRET_KEY;

      // refresh accessToken
      axios
        .post(
          `https://oauth2.googleapis.com/token?client_secret=${secretKey}&grant_type=refresh_token&refresh_token=1%2F%2F041aNLqs_v9OXCgYIARAAGAQSNwF-L9IrEP0iI8YiquxvzeFPQr1ee0JVddnEccpd3zbpTI41KHh4kvNtAwt9GL4kya11TwoMJF0&client_id=778498140586-hjpvu1ggu6tlq6ku9g1ae3k9sf9ccoma.apps.googleusercontent.com`
        )
        .then((res) => {
          accessToken = res.data.access_token;

          // post data
          axios
            .post(
              "https://sheets.googleapis.com/v4/spreadsheets/1jBGQi8HyPt4eq34utS3v1jcYVLY-6R5fzoXooy-W7MU/values/Sheet1:append?valueInputOption=RAW",
              { values: [data] },
              {
                headers: { Authorization: `Bearer ${accessToken}` },
              }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
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
