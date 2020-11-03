import React from 'react';

const TurnTitle = (props) => (
  <div className="nextTurn">
    {props.redIsNext ? 'Red' : 'Blue'}'s Turn
  </div>
);

export default TurnTitle;
