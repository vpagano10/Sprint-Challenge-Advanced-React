import React from 'react';
import axios from 'axios';
// import { data } from './data';
import './App.css';
import Navbar from './components/NavBar';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2%;
  font-size: 1.8rem;
`;
const Players = styled.div`
  width: 20%;
  margin: 2%;
  margin-top: 2%;
  padding: 1%;
  border: 4px solid black;
  border-radius: 5px;
  line-height: 1.2;
  background-color: slategrey;
  &:hover {
    background-color: grey;
    border: 4px solid dodgerblue;
  }
`;
const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: khaki;
`;
const Country = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: lightblue;
`;
const Searches = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: firebrick;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []   
    }
  }

  // componentDidMount() {
  //   this.setState({ players: data})
  // }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        })
      })
      .catch(err => {
        console.log('Data not collected', err)
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Div>
          {this.state.players.map(player => (
            <Players key={player.id}>
              <Name>{player.name}</Name><br />
              <Country>Country: </Country> {player.country}<br />
              <Searches>{player.searches}</Searches>
            </Players>
          ))}
        </Div>
      </div>
    );
  }
}

export default App;
