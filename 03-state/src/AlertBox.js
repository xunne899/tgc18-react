import React from 'react'


export default class AlertBox extends React.Component{

    state= {
        msg : this.props.value
    }



    click =() =>{
    alert('This is a last warning')

}


changeColor = () =>{

    let TextColor = "purple"
    if(this.state.msg=== this.click){
        TextColor = "red"
    }
  
    return TextColor
}

    render(){
        return(
            <React.Fragment>
            <div onClick={this.click} style={{border:"1px solid black", width:"80px", height:"80px",color :this.changeColor()}}>{this.state.msg}</div>
            </React.Fragment>

        )
    }
}