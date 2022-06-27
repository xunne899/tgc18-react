import React from 'react'

export default class NumberBox extends React.Component{
//  class must have render
state ={
    "count": this.props.initialValue
}



click = () =>{
    this.setState({
        count: this.state.count + 1
    })

}

displayStar() {
    if (this.state.count % 2 ==0) {
        return "*"
    } else {
        return "";
    }
}
// 
render(){


    let stars = "";
    if (this.state.count % 2 == 0) {
        stars = "*";
    }
    return(
        // this.state.count refers to the Numberbox state
        <div  style={{ 
         border:"10px solid black",
         padding:"10px",
         width: "20px",
         fontSize: `${this.state.count + 10}px`,
         borderColor: this.state.count > 0 ? "green" : "red",
          }} 
          onClick={this.click}>{this.state.count}
        {this.displayStar()}
        {this.state.count % 2 === 0 ? '*' : ''}
        {stars}
        {this.state.count % 2 === 0 && "*"}</div>
    )
}


}