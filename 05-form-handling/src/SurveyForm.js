import React from 'react'

export default class SurveyForm extends React.Component{
// SEIPO
// what are the state variabes of component 
    state={
        'name':'',
        'email':'',
        'colour':''
    }


    updateName = (event) =>{
        this.setState({
            'name': event.target.value
        })
    }

    updateEmail = (event) =>{
        this.setState({
            'email': event.target.value
        })
    }

    
    updateColour = (event) =>{
        this.setState({
            'colour': event.target.value
        })
    }
    render(){
        return(
            <div>
                <div>
                    <label>Name:</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.updateName}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.updateEmail}/>
                </div>
                <div>
                    <label>Favourite Color:</label>
                    <input type="radio" name="colour" value="red" className="form-check-input" onChange={this.updateColour} checked={this.state.colour === "red"}/>
                    <label className = "form-check-label">Red</label>
                    <input type="radio" name="colour" value="green" className="form-check-input" onChange={this.updateColour} checked={this.state.colour === "green"}/>
                    <label className = "form-check-label">Green</label>
                    <input type="radio" name="colour" value="blue" className="form-check-input" onChange={this.updateColour} checked={this.state.colour === "blue"}/>
                    <label className = "form-check-label">Blue</label>
                </div>
            </div>
        )
    }
}

