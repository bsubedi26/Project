import React from 'react';

class Greetings extends React.Component {
  render() {
    return (

        <div className="fullscreen-bg">
          <video autoPlay muted loop id="bgvid">
            <source src="/videos/video-bg.mp4" type="video/mp4" />
          </video>
          
          <h1 className="text-center h1-white-text">Welcome to the Main Page!</h1>

        </div>

      
    );
  }
}

export default Greetings;
