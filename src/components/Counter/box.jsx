import React, { Component } from 'react'
import pattern from "./Pattern.png";

class Box extends Component { 
    render() { 
        const {text1, text2} = this.props;
        return (
            <div>
            <span style={{top: 25,fontSize: 50,position: "relative",left: 15}}>{text1} </span>
            <img src={pattern} style={{height: 19,position: "relative",top: 20,left: 20}} />
            <span style={{top: 18,fontSize: 25,position: "relative",right: -30}}>{text2}</span>
            </div>
        );
    }
}
 
export default Box;