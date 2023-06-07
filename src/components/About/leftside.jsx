import React, { Component } from 'react'
import Icon1 from "./Icon1.png";
import Icon2 from "./Icon2.png";

class Leftside extends Component {
    state = {  } 
    render() { 
        return (
            <div className="subtext row">
            <div className="frame" style={{ marginLeft: -12 }}>
              <div
                className="pattern"
                style={{
                  width: 4,
                  height: 23,
                  background:
                    "linear-gradient(94.06deg, #FFB629 -1.21%, #FFDA56 58.66%, #FFD7A6 116.84%)",
                }}
              >
                <p style={{ width: 70 }}>Why Us</p>
              </div>
            </div>
            <div
              className="text"
              style={{
                width: 472,
                height: 82,
                padding: 0,
                marginTop: 9,
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 35,
                lineHeight: 41,
              }}
            >
              <h2 style={{ textAlign: "left" }}>
                <b>We provide full range global logistics solution</b>
              </h2>
            </div>
            <div
              className="text-2"
              style={{
                width: 464,
                height: 144,
                padding: 0,
                marginTop: 9,
                color: "#666C89",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 16,
                lineHeight: 151.52,
              }}
            >
              <h6 style={{ textAlign: "left" }}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the
                overall value proposition.
              </h6>
              <h6 style={{ textAlign: "left", marginTop: 15 }}>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment
              </h6>
            </div>
            <div className="content" style={{ marginLeft: -10 }}>
              <div
                className="img1"
                style={{
                  width: "100%",
                  height: 30,
                  textAlign: "left",
                  fontWeight: 400,
                  fontSize: 25
                }}
              >
                <img src={Icon1} /> Delivery on Time
              </div>
              <div
                className="img2"
                style={{
                  width: "100%",
                  height: 30,
                  textAlign: "left",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: 25,
                  marginTop: "3rem"
                }}
              >
                <img src={Icon2} /> Optimized Travel Cost
              </div>
            </div>
          </div>
        );
    }
}
 
export default Leftside;