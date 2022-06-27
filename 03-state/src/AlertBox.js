//

import React from 'react'
import {Component} from 'react'




export default class AlertBox extends React.Component{

    state= {
        msg : this.props.value
    }

// do not mutate state varianble directly -- this.state.msg
//react can only detect changes to the setState function

    click = () =>{
    alert('This is a last warning')

}


// changeColor = () =>{
//  let TextColor = "black"
//         if (this.state.msg){
//             TextColor = "red"
//         }
    
//     return TextColor
// }

    render(){
        return(
            <React.Fragment>
            <div onClick={this.click} style={{border:"4px solid black", width:"80px", height:"80px", color :"red"}}>{this.state.msg}</div>
            </React.Fragment>

        )
    }
}