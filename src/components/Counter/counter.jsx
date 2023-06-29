import React, { Component } from "react";
import Box from "./box";

class Counter extends Component {
  render() {
  return (
      <div
        className="counter"
        style={{
          position: "absolute",
          width: 1200,
          left: 230,
          top: 950,
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-start" style={{height: 145}}>
            <div
              className="box-1 col" style={{ fontWeight: 600, fontSize : 40, position: "relative", borderTop: "2px solid #D4D4D4", borderBottom: "2px solid #D4D4D4"}}>
            <Box text1 = "1000" text2 = "Delivered Pakages"/>
            </div>
            <div className="box-2 col" style={{borderTop: "2px solid #D4D4D4",borderBottom: "2px solid #D4D4D4",borderLeft: "2px solid #D4D4D4",fontWeight: 600, fontSize : 40}}>
            <Box text1 = "3000" text2 = "Satisfied Clients"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
