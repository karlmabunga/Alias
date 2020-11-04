/* eslint-disable react/prop-types */
import React from 'react';
import $ from 'jquery';
import TurnTitle from './TurnTitle';
import Row from './Row';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showColors: false,
      colors: {},
      gameOver: false,
      red: 9,
      blue: 8,
      redIsNext: true,
      words: [],
    };
    this.onClick = this.onClick.bind(this);
    this.addColor = this.addColor.bind(this);
    this.grandMasterView = this.grandMasterView.bind(this);
    this.newGame = this.newGame.bind(this);
    this.trackTurns = this.trackTurns.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/words',
    //   success: (data) => {
    //     let id = 0;
    //     const onlySome = [];
    //     const randoms = [];
    //     for (let i = 0; i < 100; i += 1) {
    //       const number = Math.floor(Math.random() * (400 - 1) + 1);
    //       // console.log('number: ', number);
    //       if (!randoms.includes(number)) {
    //         id += 1;
    //         randoms.push(number);
    //         onlySome.push([id, data[number]]);
    //       }
    //       if (onlySome.length === 25) {
    //         break;
    //       }
    //     }
    //     // console.log('only 25: ', onlySome);
    //     // console.log('ramonds: ', randoms);
    //     this.setState({
    //       words: onlySome,
    //     });
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   },
    // });
    this.addColor();
  }

  onClick(event) {
    const { gameOver, showColors } = this.state;
    let { red, blue } = this.state;
    if (showColors) {
      return;
    }
    // console.log('e.target', event.target.classList[2]);
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
    } else if (event.target.classList[1] === 'red') {
      this.setState({
        red: red -= 1,
      });
    } else if (event.target.classList[1] === 'blue') {
      this.setState({
        blue: blue -= 1,
      });
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
    const { showColors } = this.state;
    const elements = document.getElementsByClassName('td');
    // console.log('elements: ', elements);
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.add('neutral');
    }
    this.addColor();
    if (showColors) {
      this.setState({
        showColors: !showColors,
      });
    }
  }

  trackTurns(event) {
    const { redIsNext } = this.state;
    console.log('classes: ', event.target.classList);
    if (redIsNext && (event.target.classList[1] === 'undefined' || event.target.classList[1] === 'blue')) {
      this.setState({
        redIsNext: !redIsNext,
      });
    } else if (!redIsNext && (event.target.classList[1] === 'undefined' || event.target.classList[1] === 'red')) {
      this.setState({
        redIsNext: !redIsNext,
      });
    }
  }

  render() {
    const {
      showGame, team1, team2, words, getWords,
    } = this.props;
    const {
      colors, showColors, red, blue, redIsNext,
    } = this.state;
    return (
      <div>
        <div className="homewrapper">
          <button type="button" className="home" onClick={showGame}>
            Home
          </button>
          <button type="button" className="newgame" onClick={() => { this.newGame(); getWords(); }}>
            New Game
          </button>
        </div>
        <div className="masterview">
          <button type="button" className="masterviewbutton" onClick={() => this.grandMasterView()}>Grand Master View</button>
        </div>
        <h2>{team1 || 'Red'} vs {team2 || 'Blue'}</h2>
        {showColors ? <div className="view">Grand Master View: On</div> : null}
        <TurnTitle redIsNext={redIsNext} />
        <div className="score"><div className="redscore">{red}</div> - <div className="bluescore">{blue}</div></div>
        <table className="board">
          <tbody id="tbody" onClick={(e) => { this.onClick(e) ; this.trackTurns(e); }} >
            <Row colors={colors} words={words.slice(0, 5)} />
            <Row colors={colors} words={words.slice(5, 10)} />
            <Row colors={colors} words={words.slice(10, 15)} />
            <Row colors={colors} words={words.slice(15, 20)} />
            <Row colors={colors} words={words.slice(20, 25)} />
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = GameBoard;
