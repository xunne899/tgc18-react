import React from 'react'
export default class NumBox extends React.Component{

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
        let  textcolor = "purple"
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
<div style={{ border: "2px solid red",height: "40px",width: "40px",marginTop: "10px",padding: "10px" ,marginLeft: "10px",color:this.color()}}>
          {this.state.count}
</div>
    <button style= {{marginLeft: "10px"}} onClick={this.increment}>+</button>
    <button onClick={this.decrement}>-</button>
</React.Fragment> 
  
  )
 }
}