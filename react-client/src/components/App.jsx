/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Intro from './Intro';
import Instructions from './Instructions';
import GameBoard from './GameBoard';
import TeamTitle from './TeamTitle';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      showInstructions: false,
      showGame: false,
      team1: '',
      team2: '',
    };
    this.showInstructions = this.showInstructions.bind(this);
    this.showGame = this.showGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getWords = this.getWords.bind(this);
  }

  componentDidMount() {
    this.getWords();
  }

  getWords() {
    $.ajax({
      url: '/words',
      success: (data) => {
        let id = 0;
        const onlySome = [];
        const randoms = [];
        for (let i = 0; i < 100; i += 1) {
          const number = Math.floor(Math.random() * (400 - 1) + 1);
          // console.log('number: ', number);
          if (!randoms.includes(number)) {
            id += 1;
            randoms.push(number);
            onlySome.push([id, data[number]]);
          }
          if (onlySome.length === 25) {
            break;
          }
        }
        this.setState({
          words: onlySome,
        });
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }

  showInstructions(event) {
    event.preventDefault();
    const { showInstructions } = this.state;
    this.setState({
      showInstructions: !showInstructions,
    });
  }

  showGame(event) {
    event.preventDefault();
    const { showGame, showInstructions } = this.state;
    // console.log(event.target);
    this.setState({
      showGame: !showGame,
      showInstructions: false,
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      items, showInstructions, showGame, team1, team2, words,
    } = this.state;
    return (
      <div>
        <div className="mainheader">
          <h1>¿Alias?</h1>
        </div>
        {!showGame ? <Intro items={items} showInstructions={this.showInstructions} showGame={this.showGame} /> : null }
        {!showGame ? <TeamTitle handleChange={this.handleChange} team1={team1} team2={team2} /> : null}
        {showGame ? <GameBoard showGame={this.showGame} getWords={this.getWords} team1={team1} team2={team2} words={words} /> : null}
        {showInstructions ? <Instructions /> : null}
      </div>
    );
  }
}

export default App;
