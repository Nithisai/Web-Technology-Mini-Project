import React, { Component } from 'react';
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('src\cloud\clouds-2329680_1280.jpg')",
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