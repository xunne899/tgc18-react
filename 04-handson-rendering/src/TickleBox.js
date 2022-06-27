import React from 'react'

export default class TickleBox extends React.Component{
    state ={
        msg : ""
    }

    tickle =()=>{
        this.setState ({
            msg:"It is so ticklish"
        })
    }
   
    resetTickle = ()=>{
        this.setState({
            msg:""
        })
    }
    render(){
    return(
    <React.Fragment>
        <div onMouseEnter={this.tickle} onMouseOut={this.resetTickle} style={{backgroundColor:"yellow",border: '4px solid black', padding:"10px", width:"50px", height:"50px"}}>
       {this.state.msg}
        </div>


    </React.Fragment>

    )}
}
