import React from "react";

export default class Tickle extends React.Component{
    state = {
      msg : ""
    }


    tickle = () =>{
        this.setState({
            msg : "Very Ticklish"
        })
    }


    notickle = () =>{
        this.setState({
            msg : ""
        })
    }



    render(){
        return(
            <React.Fragment>
           <div onMouseEnter={this.tickle} onMouseOut={this.notickle} style={{border:"2px solid black", height:"60px", width:"60px",margin:"10px",padding:"20px",color:"red"}}>{this.state.msg}
           </div>
            </React.Fragment>

        )
    }
}