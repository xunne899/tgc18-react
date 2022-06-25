import React from 'react'



export default class AlertBox extends React.Component{

    state= {
        msg: this.props.message
    }

    click = () =>{
        alert('This is a last warning')
      }

    render(){
     return (
         <React.Fragment>
         <div onClick={this.click} style={{'border':'4px solid black', padding:'10px', width:'450px'}}>{this.state.msg}</div>
         </React.Fragment>
         )
     }  
}