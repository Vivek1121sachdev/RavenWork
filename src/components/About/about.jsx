import React, { Component } from "react";
import Leftside from "./leftside";
import Rightside from "./rightside";

class About extends Component {
  render() {
    return (
       <div
        className="container"
        style={{
          position: "absolute",
          width: 1200,
          height: 532,
          left: 230,
          top: 366,
          background: "#FFFFFF",
        }}
      >
        <div class="container text-center">
          <div class="row justify-content-start m-5">
            <div className="texts col-6">
              <Leftside/>
            </div>
            <div className="images col-6">
            <Rightside/>    
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
