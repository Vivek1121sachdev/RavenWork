import React, { Component } from "react";
import Images from "./images";
import Photo from "./Photo.png";
import BackgroundImg from "./BackgroundImg.png";
import About from "../About/about";


class HeaderPart extends Component {
  render() {
    return (
      <div className="header-container" style={{ position: "relative" , width: 1919}}>
        <div className="header" style={{ position: "relative", }} >
          <Images image = {Photo} />
          <Images image = {BackgroundImg} />
        </div>
        <About/>
      </div>
    );
  }
}

export default HeaderPart;
