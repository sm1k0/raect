// Jumbotron.js

import React from 'react';

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <div className="animated-text-container">
        <h1 className="animated-text" data-text="Welcome to Anime Land">Welcome to Anime Land</h1>
      </div>
      <p className="animated-text">Explore the fascinating world of anime with your favorite series.</p>
      <a className="btn btn-primary btn-lg" href="#bleach" role="button">Learn more</a>
    </div>
  );
}

export default Jumbotron;
