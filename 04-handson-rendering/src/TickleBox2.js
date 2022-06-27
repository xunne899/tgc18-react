import React from 'react'

export default class TickleBox2 extends React.Component{
    state ={
        msg : false
    }

    tickle =()=>{
        this.setState ({
            msg: ! this.state.msg
        })
    }
   
    // resetTickle = ()=>{
    //     this.setState({
    //         msg: false
    //     })
    // }
    render(){
    return(
    <React.Fragment>
        <div onMouseEnter={this.tickle} onMouseOut={this.tickle} style={{backgroundColor:"yellow",border: '4px solid black', padding:"10px", width:"50px", height:"50px"}}>
       {this.state.msg ? "It is so ticklish":""}
        </div>


    </React.Fragment>

    )}
}
