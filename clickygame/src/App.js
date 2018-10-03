import React, { Component } from 'react';
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Counter from "./components/Counter";
import dogs from "./dogs.json";
import Nav from "./components/Nav";
import './App.css';

function shuffleDogs(array) {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    dogs,
    clicked: [],
    score: 0,
    highScore: 0
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };


  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState ({
      score: newScore,
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    } else if (newScore === 12) {
      alert ("You win!");
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState ({
      score: 0,
      highScore: this.state.highScore,
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledDogs = shuffleDogs(dogs);
    this.setState({ dogs: shuffledDogs });
  };



  render() {
    return (
      <Wrapper>
          <Title>
            Click on each dog but only click on each picture once if you want to win!
            </Title>
        <Nav
          title="Dog Clicky Game"
          score={this.state.score}
          highScore={this.state.highScore}
          />
            {this.state.dogs.map(dog => (
              <DogCard
              key={dog.id}
              handleClick={this.handleClick}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={dog.id}
              image={dog.image}
              / >
            ))}
        </Wrapper>
    )
  }
}

export default App;
