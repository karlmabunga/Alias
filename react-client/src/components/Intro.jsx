/* eslint-disable react/prop-types */
import React from 'react';

const Intro = ({ showInstructions, showGame }) => (
  <div className="introheader">
    <h4> Can you spot your spies? </h4>
    <div className="introbutton">
      <button className="start" type="button" onClick={showGame}>
        Let's play
      </button>
      <button className="instructions" type="button" onClick={showInstructions}>
        How to play
      </button>
    </div>
  </div>
);

export default Intro;
