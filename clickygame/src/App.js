import React, { Component } from 'react';
import DogCard from "./components/DogCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Counter from "./components/Counter";
import dogs from "./dogs.json";
import './App.css';


class App extends Component {

  state = {dogs
  };

  render() {
    return (
      <Wrapper>
        <Title>Dogs</Title>
        {this.state.dogs.map(dog => (
          <DogCard
          image={dog.image}
          />
        ))}
        </Wrapper>
    )
  }
}


// const App = () => <Counter />;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
