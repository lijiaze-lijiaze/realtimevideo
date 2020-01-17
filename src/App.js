import React from 'react';
import videojs  from 'video.js';
import logo from './logo.svg';
import VideoPlayer from './videoPlayer'
import './App.css';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: '/path/to/video.mp4',
    type: 'video/mp4'
  }]
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <VideoPlayer { ...videoJsOptions } />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
