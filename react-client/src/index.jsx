/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Intro from './components/Intro';
import Instructions from './components/Instructions';
import GameBoard from './components/GameBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showInstructions: false,
      showGame: false,
    };
    this.showInstructions = this.showInstructions.bind(this);
    this.showGame = this.showGame.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data,
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
    const { showGame } = this.state;
    this.setState({
      showGame: !showGame,
    });
  }

  render() {
    const { items, showInstructions, showGame } = this.state;
    return (
      <div>
        <h1>¿Alias?</h1>
        {!showGame ? <Intro items={items} showInstructions={this.showInstructions} showGame={this.showGame} /> : null }
        {showGame ? <GameBoard showGame={this.showGame} /> : null}
        {showInstructions ? <Instructions /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
