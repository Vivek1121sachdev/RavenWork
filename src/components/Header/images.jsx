import React, { Component } from 'react'

class Images extends Component {
    render() { 
        const {image} = this.props;
        return (
            <img
            src={image}
            style={{
              position: "absolute",
              width: 1919,
              height: 504,
              left: -236.5,
              top: 0,
            }}
          />
        );
    }
}
 
export default Images;