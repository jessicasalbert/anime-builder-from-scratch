import React from 'react'

class CharForm extends React.Component{

    state={
        name: "",
        img: "",
        show: ""
    }

    localForm = (e) => {
        e.preventDefault()
        this.props.formHandler(this.state)
        this.setState({name:"", img:"", show:""})
    }

    handleFormState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.localForm}> 
                <input onChange={this.handleFormState} type="text" name="name" value={this.state.name}/>
                <input onChange={this.handleFormState} type="text" name="img" value={this.state.img}/>
                <input onChange={this.handleFormState} type="text" name="show" value={this.state.show}/>
                <input type="submit" value="Enter"></input>
            </form>
        )

    }

}

export default CharForm