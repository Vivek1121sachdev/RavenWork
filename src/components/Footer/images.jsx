import React, { Component } from 'react'
import BackGround from "./Background.png"

class Images extends Component {
    state = {  } 
    render() { 
        const {image, text1, text2} = this.props;
        return (
            <div className="image">
            <img src={BackGround} style={{position: "absolute", left : 0, height: 450}}/>
            <span style={{position: "absolute", fontSize:20, fontWeight:500,color:"white", top : 364, left : 23}}>{text1}</span>
            <span style={{position: "absolute", fontSize:16, fontWeight:500,color:" #FFB629", top : 395, left : 23}}>{text2}</span>
            <img src={image} style={{ height: 450 }} />
            </div>
        );
    }
}
 
export default Images;