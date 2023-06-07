import React, { Component } from 'react'
import HeaderPart from './Header/header';
import Counter from "./Counter/counter";
import FooterImage from './Footer/footer';

class Main extends Component {
  render() {
    return (
      <div>
      <div>
        <HeaderPart/>
      </div>
      <div>
      <Counter/> 
      </div>
      <div>
        <FooterImage/>
      </div>
      </div>
    );
  }
}

export default Main;
