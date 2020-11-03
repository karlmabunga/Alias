/* eslint-disable react/prop-types */
import React from 'react';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      colors: {},
      gameOver: false,
      red: 9,
      blue: 8,
    };
    this.onClick = this.onClick.bind(this);
    this.addColor = this.addColor.bind(this);
    this.grandMasterView = this.grandMasterView.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  componentDidMount() {
    this.addColor();
  }

  onClick(event) {
    const { gameOver } = this.state;
    // console.log('e.target', e.target);
    // console.log(document.getElementById(`${e.target.id}`));
    event.target.classList.remove('neutral');
    event.target.classList.add('clicked');
    // console.log('classes: ', event.target.classList)
    if (event.target.classList[1] === 'purple') {
      this.setState({
        gameOver: !gameOver,
      });
      this.grandMasterView();
      alert('Game Over');
    }
  }

  addColor() {
    const colors = {};
    const randomRed = [];
    const randomBlue = [];
    const automaticLoss = [];
    const generateRed = () => {
      for (let i = 0; i < 25; i += 1) {
        const number = Math.floor(Math.random() * (25 - 1) + 1);
        if (!randomRed.includes(number) && !randomBlue.includes(number)) {
          randomRed.push(number);
        }
        if (randomRed.length === 9) {
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
        if (randomBlue.length === 8) {
          return;
        }
      }
    };
    const deathSpot = () => {
      for (let i = 0; i < 25; i += 1) {
        const number = Math.floor(Math.random() * (25 - 1) + 1);
        if (!randomBlue.includes(number) && !randomRed.includes(number)) {
          automaticLoss.push(number);
        }
        if (automaticLoss.length === 1) {
          return;
        }
      }
    };
    generateRed();
    generateBlue();
    deathSpot();
    colors[automaticLoss[0]] = 'purple';
    for (let i = 0; i <= randomRed.length; i += 1) {
      colors[randomRed[i]] = 'red';
    }
    for (let i = 0; i <= randomBlue.length; i += 1) {
      colors[randomBlue[i]] = 'blue';
    }
    // console.log('loss', automaticLoss);
    // console.log('red', randomRed);
    // console.log('blue', randomBlue);
    // console.log('colors: ', colors);
    this.setState({
      colors,
    });
  }

  grandMasterView() {
    const { showColors, gameOver } = this.state;
    const elements = document.getElementsByClassName('td');
    if (!showColors || gameOver) {
      for (let i = 0; i < elements.length; i += 1) {
        elements[i].classList.remove('neutral');
      }
      this.setState({
        showColors: !showColors,
      });
    } else {
      for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].classList[2] !== 'clicked') {
          elements[i].classList.add('neutral');
        }
      }
      this.setState({
        showColors: !showColors,
      });
    }
  }

  newGame() {
    const elements = document.getElementsByClassName('td');
    console.log('elements: ', elements);
    for (var i = 0; i < elements.length; i += 1) {
      elements[i].classList.add('neutral');
    }
    this.addColor();
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
    const {
      colors, showColors, red, blue
    } = this.state;
    return (
      <div>
        <div className="homewrapper">
          <button type="button" className="home" onClick={showGame}>
            Home
          </button>
          <button type="button" className="newgame" onClick={() => this.newGame()}>
            New Game
          </button>
        </div>
        <div className="masterview">
          <button type="button" onClick={() => this.grandMasterView()}>Grand Master View</button>
        </div>
        {showColors ? <div>Grand Master View: On</div> : null}
        <div className="score"><div className="redscore">{red}</div> - <div className="bluescore">{blue}</div></div>
        <table className="board">
          <tbody id="tbody" onClick={(e) => this.onClick(e)} >
            <tr>
              <td id="1" className={`td neutral ${colors['1']}`} type="button">1</td>
              <td id="2" className={`td neutral ${colors['2']}`} type="button">2</td>
              <td id="3" className={`td neutral ${colors['3']}`} type="button">3</td>
              <td id="4" className={`td neutral ${colors['4']}`} type="button">4</td>
              <td id="5" className={`td neutral ${colors['5']}`} type="button">5</td>
            </tr>
            <tr>
              <td id="6" className={`td neutral ${colors['6']}`}>6</td>
              <td id="7" className={`td neutral ${colors['7']}`}>7</td>
              <td id="8" className={`td neutral ${colors['8']}`}>8</td>
              <td id="9" className={`td neutral ${colors['9']}`}>9</td>
              <td id="10" className={`td neutral ${colors['10']}`}>10</td>
            </tr>
            <tr>
              <td id="11" className={`td neutral ${colors['11']}`}>11</td>
              <td id="12" className={`td neutral ${colors['12']}`}>12</td>
              <td id="13" className={`td neutral ${colors['13']}`}>13</td>
              <td id="14" className={`td neutral ${colors['14']}`}>14</td>
              <td id="15" className={`td neutral ${colors['15']}`}>15</td>
            </tr>
            <tr>
              <td id="16" className={`td neutral ${colors['16']}`}>16</td>
              <td id="17" className={`td neutral ${colors['17']}`}>17</td>
              <td id="18" className={`td neutral ${colors['18']}`}>18</td>
              <td id="19" className={`td neutral ${colors['19']}`}>19</td>
              <td id="20" className={`td neutral ${colors['20']}`}>20</td>
            </tr>
            <tr>
              <td id="21" className={`td neutral ${colors['21']}`}>21</td>
              <td id="22" className={`td neutral ${colors['22']}`}>22</td>
              <td id="23" className={`td neutral ${colors['23']}`}>23</td>
              <td id="24" className={`td neutral ${colors['24']}`}>24</td>
              <td id="25" className={`td neutral ${colors['25']}`}>25</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = GameBoard;
