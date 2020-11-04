/* eslint-disable react/prop-types */
import React from 'react';

const TeamTitle = (props) => {
  const { handleChange, team1, team2 } = props;
  return (
    <div className="form">
      <form>
        <label className="team1label">
          <div>Team Red = {team1}</div>
        </label>
        <input type="text" name="team1" placeholder="Team Red" onChange={(event) => handleChange(event)} />
        <label className="team2label">
          <div>Team Blue = {team2}</div>
        </label>
        <input type="text" name="team2" placeholder="Team Blue" onChange={(event) => handleChange(event)} />
      </form>
      <form>

      </form>
  </div>
  )
};

export default TeamTitle;
