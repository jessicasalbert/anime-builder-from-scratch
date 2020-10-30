import logo from './logo.svg';
import './App.css';
import CharCon from './containers/CharCon'
import TeamCon from './containers/TeamCon'
import React from 'react'

class App extends React.Component {

  state={
    team: []
  }


  clickHandler = (obj) => {
    const newTeam = [obj, ...this.state.team]
    this.setState( () => ({team: newTeam}))
  }

  render() {
    console.log(this.state.team)
    return (
      <>
        <h1>Anime Teams</h1>
        <TeamCon team={this.state.team}/>
        <CharCon clickHandler={this.clickHandler}/>
      </>
    )
  }
}

export default App;
