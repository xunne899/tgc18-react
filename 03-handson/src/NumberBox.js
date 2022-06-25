
import React from 'react'


export default class NumberBox extends React.Component{

    state = {

    count:this.props.InitialValue

    }

  render(){
   return(
    <React.Fragment>
      <div style={{border:"1px solid black", padding:"10px",  width:"20px"}}>{this.state.count}</div>
    </React.Fragment>
   )

  }
}