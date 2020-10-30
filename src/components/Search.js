import React from 'react'

export default class Search extends React.Component {

    state = {
        name: ""
    }

    updateState = (e) => {
        this.setState( { name: e.target.value})
        this.props.searchHandler(e)
    }

    render() {
        return (
            <>
                <h3>Filter by name</h3>
                <form>
                    <input onChange={this.updateState} type="text" value={this.state.name} />

                </form>
            </>
        )
    }
}