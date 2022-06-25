
import React from 'react'


export default class NumberBox extends React.Component{

    state = {
    count: this.props.InitialValue
    }

 click = () =>{
  this.setState({
    count : this.state.count + 1
  })
 }

resetClick =() =>{
this.setState({
  count : ''
})
}

initialValue = () =>{
  this.setState({
    count: this.props.InitialValue
  })
}

  render(){
   return(
    <React.Fragment>
      <div  onMouseEnter={this.initialValue}  onClick={this.click} style={{border:"1px solid black", fontSize: `${10 + this.state.count * 5}px`,padding:"10px",  width:"20px"}}>{this.state.count}</div>
      { this.state.count % 2 === 0 ? <p>Number is even</p> : null}
      <button  onClick={this.resetClick} type="button" class="btn btn-primary">Reset</button><br/>
    </React.Fragment>
   )

  }
}