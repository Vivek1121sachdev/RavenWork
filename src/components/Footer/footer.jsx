import React, { Component } from "react";
import Images from "./images";
import Footer from "./Footer.png";
import Truck1 from "./truck1.png";
import Truck2 from "./truck2.png";
import People from "./People.png";
import Ship from "./ship.png";

class FooterImage extends Component {
  render() {
    return (
      <div
        className="footerbox"
        style={{ width: 1690, height: 503, position: "absolute", top: 1500 }}
      >
        <img
          src={Footer}
          style={{
            width: 1690,
            height: 504,
          }}
        />
        <div className="text" style={{ position: "relative", bottom: 855 }}>
          <h3 style={{ fontSize: 35, fontWeight: 600 }}>
            Transporting Across The World
          </h3>
        </div>
        <div
          className="images"
          style={{ position: "absolute", top: -232, left: 258 }}
        >
          <div
            className="truck1"
            style={{
              display: "inline-block",
              position: "relative",
              left: -201,
            }}
          >
            <Images
              image={Truck1}
              text1="Liquid Transportation"
              text2="Premium Tankers"
            />
          </div>
          <div
            className="people"
            style={{
              display: "inline-block",
              position: "relative",
              left: -147,
            }}
          >
            <Images
              image={People}
              text1="Packaging Solutions"
              text2="Warehouse Management"
            />
          </div>
          <div
            className="truck2"
            style={{
              display: "inline-block",
              position: "relative",
              left: -100,
            }}
          >
            <Images
              image={Truck2}
              text1="Contract Logistics"
              text2="Supply Chain Solutions"
            />
          </div>
          <div
            className="ship"
            style={{
              display: "inline-block",
              position: "relative",
              right: 52,
            }}
          >
            <Images
              image={Ship}
              text1="Specialized Transport"
              text2="Ocean Transports"
            />
          </div>
        </div>
        <div
          className="button"
          style={{
            position: "absolute",
            top: 325,
            background: "blue",
            color: "white",
            width: 108,
            left: 765,
            cursor: "pointer",
          }}
        >
          <p>More Work</p>
        </div>
      </div>
    );
  }
}

export default FooterImage;
