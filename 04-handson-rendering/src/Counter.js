import React from 'react'
export default class Counter extends React.Component{

    state = {
        count : 0
    }


    increment = () =>{
     this.setState({
      count: this.state.count + 1
     })
    }


    decrement = () =>{
        this.setState({
         count: this.state.count - 1
        })
       }

       color = () =>{
        let  textcolor = "grey"
        if(this.state.count < 0){
            textcolor = "red"
        }
        if(this.state.count > 0){
            textcolor = "green"
        }
         return textcolor
       }

render(){
    return ( 

<React.Fragment>
<div style={{ border: "2px solid red",height: "60px",width: "60px",marginTop: "10px",padding: "10px" ,marginLeft: "10px",color:this.color()}}>
{ this.state.count % 2 === 0 ? <p> {this.state.count}<br/>Even</p> : null}
</div>
    <button style= {{marginLeft: "10px"}} onClick={this.increment}>+</button>
    <button onClick={this.decrement}>-</button>
</React.Fragment> 
  
  )
 }
}