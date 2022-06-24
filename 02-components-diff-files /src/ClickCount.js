
import React from 'react'
class ClickCount extends React.Component{
    
    // definded as afunction inside React.Component
    
state = {
    'count' : 0
}

    constructor(props){
       super(props)
    }
    // whatever jsx is returned will be rendered on web
    render(){
        console.log('render')
        return(
            <h1>
            Click Count = {this.state.count}
            </h1>
        )

    }
}

export default ClickCount