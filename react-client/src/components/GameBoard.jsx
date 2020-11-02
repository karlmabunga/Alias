/* eslint-disable react/prop-types */
import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      colors: { 1:undefined, },
    };
    this.onClick = this.onClick.bind(this);
    this.addColor = this.addColor.bind(this);
  }

  componentDidMount() {
    this.addColor();
  }

  onClick(e) {
    console.log('e.target', e.target);
    console.log(document.getElementById(`${e.target.id}`));
  }

  addColor() {
    const randomRed = [];
    const randomBlue = [];
    const generateRed = () => {
      for (let i = 0; i < 25; i += 1) {
        const number = Math.floor(Math.random() * (25 - 1) + 1);
        if (!randomRed.includes(number) && !randomBlue.includes(number)) {
          randomRed.push(number);
        }
        if (randomRed.length === 10) {
          return;
        }
      }
    };
    const generateBlue = () => {
      for (let i = 0; i < 25; i += 1) {
        const number = Math.floor(Math.random() * (25 - 1) + 1);
        if (!randomBlue.includes(number) && !randomRed.includes(number)) {
          randomBlue.push(number);
        }
        if (randomBlue.length === 9) {
          return;
        }
      }
    };
    const deathSpot = () => {
      const number = Math.floor(Math.random() * (25 - 1) + 1);
      if (!randomBlue.includes(number) && !randomRed.includes(number)) {
        randomBlue.push(number);
      }
    };
    generateRed();
    generateBlue();
    var colors = {}
    for (let i = 1; i <= randomRed.length; i += 1) {
      colors[randomRed[i]] = 'red';
    }
    for (let i = 1; i <= randomBlue.length; i += 1) {
      colors[randomBlue[i]] = 'blue';
    }
    // console.log(colors);
    this.setState({
      colors,
    });
  }

  render() {
    // const randomRed = [];
    // const randomBlue = [];
    // const generateRed = () => {
    //   for (let i = 0; i < 25; i += 1) {
    //     const number = Math.floor(Math.random() * (25 - 1) + 1);
    //     if (!randomRed.includes(number) && !randomBlue.includes(number)) {
    //       randomRed.push(number);
    //     }
    //     if (randomRed.length === 9) {
    //       return;
    //     }
    //   }
    // };
    // const generateBlue = () => {
    //   for (let i = 0; i < 25; i += 1) {
    //     const number = Math.floor(Math.random() * (25 - 1) + 1);
    //     if (!randomBlue.includes(number) && !randomRed.includes(number)) {
    //       randomBlue.push(number);
    //     }
    //     if (randomBlue.length === 8) {
    //       return;
    //     }
    //   }
    // };
    // generateRed();
    // generateBlue();
    // const addColor = () => {
    //   const colors = {};
    //   for (let i = 1; i <= randomRed.length; i += 1) {
    //     colors[randomRed[i]] = 'red';
    //   }
    //   for (let i = 1; i <= randomBlue.length; i += 1) {
    //     colors[randomBlue[i]] = 'blue';
    //   }
    //   console.log(colors);
    //   // this.setState({
    //   //   colors,
    //   // });
    // };
    // addColor();
    // console.log('red', randomRed);
    // console.log('blue', randomBlue);

    const { showGame } = this.props;
    const { colors } = this.state;
    return (
      <div>
        <div className="homewrapper">
          <button type="button" className="home" onClick={showGame}>
            Home
          </button>
          <button type="button" className="newgame">
            New Game
          </button>
        </div>
        <table className="board">
          <tbody id="tbody" onClick={(e) => this.onClick(e)} >
            <tr>
              <td id="1" className={`td ${colors['1']}`} type="button" onClick={(event) => console.log(event.target.classList[1])}>1</td>
              <td id="2" className={`td ${colors['2']}`} type="button">2</td>
              <td id="3" className={`td ${colors['3']}`} type="button">3</td>
              <td id="4" className={`td ${colors['4']}`} type="button">4</td>
              <td id="5" className={`td ${colors['5']}`} type="button">5</td>
            </tr>
            <tr>
              <td id="6" className={`td ${colors['6']}`}>6</td>
              <td id="7" className={`td ${colors['7']}`}>7</td>
              <td id="8" className={`td ${colors['8']}`}>8</td>
              <td id="9" className={`td ${colors['9']}`}>9</td>
              <td id="10" className={`td ${colors['10']}`}>10</td>
            </tr>
            <tr>
              <td id="11" className={`td ${colors['11']}`}>11</td>
              <td id="12" className={`td ${colors['12']}`}>12</td>
              <td id="13" className={`td ${colors['13']}`}>13</td>
              <td id="14" className={`td ${colors['14']}`}>14</td>
              <td id="15" className={`td ${colors['15']}`}>15</td>
            </tr>
            <tr>
              <td id="16" className={`td ${colors['16']}`}>16</td>
              <td id="17" className={`td ${colors['17']}`}>17</td>
              <td id="18" className={`td ${colors['18']}`}>18</td>
              <td id="19" className={`td ${colors['19']}`}>19</td>
              <td id="20" className={`td ${colors['20']}`}>20</td>
            </tr>
            <tr>
              <td id="21" className={`td ${colors['21']}`}>21</td>
              <td id="22" className={`td ${colors['22']}`}>22</td>
              <td id="23" className={`td ${colors['23']}`}>23</td>
              <td id="24" className={`td ${colors['24']}`}>24</td>
              <td id="25" className={`td ${colors['25']}`}>25</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = GameBoard;
