import React from 'react'

export default class NumberBox extends React.Component{
//  class must have render
state ={
    "count": this.props.initialValue
}
// 
render(){
    return(
        // this.state.count refers to the Numberbox state
        <div style={{ border:"1px solid black", padding:"10px", "width": "20px"}}>{this.state.count}</div>
    )
}


}