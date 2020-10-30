import CharCard from '../components/CharCard'
import characters from '../api'
import React from 'react'
import CharForm from '../components/CharFom'
import Search from '../components/Search'

export default class CharCon extends React.Component {

    state = {
        characters: characters,
        filtered: characters
    }

    updateChars = (newChar) => {
        this.setState( prevState => ({
            characters: [newChar, ...prevState.characters]
        }))
        // console.log(newChar)
        // const newCh = [newChar, ...this.state.characters]
        // this.setState( () => ({characters: newCh, filtered: newCh}))

        //this.setState((prevState) => ({ characters: [newChar, ...prevState.characters], filtered: [newChar, ...prevState.characters] }))
    }

 

    renderChars = () => {
        return this.state.filtered.map( (char, index) => <CharCard char={char} key={index} clickHandler={this.props.clickHandler}/>)
    }

    searchHandler = (e) => {
        let filtered = this.state.characters.filter( char => char.name.toLowerCase().includes(e.target.value.toLowerCase()))

        this.setState( () => ({filtered: filtered}))
        
    }

    render() {
        return (
            <div>
                <h3>Index</h3>
                <CharForm formHandler={this.updateChars}/>
                <Search searchHandler={this.searchHandler}/>
                {this.renderChars()}
            </div>
        )

    }
    
}