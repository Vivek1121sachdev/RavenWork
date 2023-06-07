import React, { Component } from 'react'
import Plane from "./Plane.png";
import Girl from "./girl.png";

class Rightside extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <img
                src={Plane}
                style={{
                  position: "absolute",
                  width: 470,
                  height: 342,
                  left: 650,
                  top: 50,
                }}
              />
              <div
                className="whitebox"
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  height: 173,
                  width: 266,
                  top: 252,
                  right: 287,
                }}
              ></div>
              <div
                className="girl"
                style={{ position: "absolute", top: 289, right: 329 }}
              >
                <img src={Girl} style={{ height: 231 }} />
              </div>
            </div>
        );
    }
}
 
export default Rightside;