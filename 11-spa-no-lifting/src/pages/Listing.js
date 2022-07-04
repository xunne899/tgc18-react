import React from 'react'
import axios from 'axios'

export default class Listing extends React.Component{
    url ="https://8888-xunne899-dwadrecipeapi-byefmbidvc9.ws-us47.gitpod.io/"

    state = {

        recipes:[]
    }

    async componentDidMount(){
        let response = await axios.get(this.url + 'recipes')
        this.setState ({
          recipes : response.data
        })
    }
    render() { 
        return (
            <React.Fragment>
                <h1>All Recipes</h1>
                <ul className="list-group">
                {
                    this.state.recipes.map( r => <React.Fragment key={r._id}>
                        <li className="list-group-item">
                        <h1>{r.title}</h1>
                        <h2>Ingredients</h2>
                        {
                        r.ingredients.map(i=> <span key={i} className="badge bg-primary mx-1">
                            {i}
                         </span>)
                         }
                         </li>
                    </React.Fragment>)
                }
            </ul>
            </React.Fragment>
            
        )
    }
}