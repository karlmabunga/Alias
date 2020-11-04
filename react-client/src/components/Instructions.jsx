/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

const Intructions = (props) => (
  <div className="instructionsparagraph">
    Two teams compete by each having a "grandmaster" give one-word clues that can point to multiple words on the board. The other players on the team attempt to guess their team's words or "spies" while avoiding the words of the other team. One grandmaster gives clues to the other player or players on their team. Only the grandmaster is allowed to see the grandmaster view. Watch out for the Killer(purple spot). Any team that gets the purple spot will automatically lose. The first team to recognize all of their words will win. Have fun!
    <div className="note">Side Note: ClickGrandMasterView ? YouBetterBeGrandMaster : YoureCheating</div>
  </div>
);

module.exports = Intructions;
