/* eslint-disable react/prop-types */
import React from 'react';

const TurnTitle = ({ redIsNext, team1, team2}) => (
  <div className="nextTurn">
    {redIsNext ? team1 || 'Red' : team2 || 'Blue'}'s Turn
  </div>
);

export default TurnTitle;
