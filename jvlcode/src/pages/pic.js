import React, { Component } from 'react';
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://www.nasa.gov/sites/default/files/thumbnails/image/smap-weather.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
    );
  }
}