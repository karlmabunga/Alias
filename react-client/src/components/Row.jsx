/* eslint-disable react/prop-types */
import React from 'react';

const Row = ({ colors, words }) => (
  <tr>
    <td id={words[0][0]} className={`td neutral ${colors[words[0][0]]}`} type="button">{words[0][1]}</td>
    <td id={words[1][0]} className={`td neutral ${colors[words[1][0]]}`} type="button">{words[1][1]}</td>
    <td id={words[2][0]} className={`td neutral ${colors[words[2][0]]}`} type="button">{words[2][1]}</td>
    <td id={words[3][0]} className={`td neutral ${colors[words[3][0]]}`} type="button">{words[3][1]}</td>
    <td id={words[4][0]} className={`td neutral ${colors[words[4][0]]}`} type="button">{words[4][1]}</td>
  </tr>
);

export default Row;
