import React from 'react'


export default class Dice extends React.Component{

    // state = {
    //     count: 0 
    // }
 roll(){
    return Math.floor(Math.random()*6 + 1)
 }
    state = {
        count:  this.roll(),
        color:'black'
    }

    click = () =>{
        this.setState({
            count : this.roll()
        })
    }


    color = () =>{
        let  textcolor = "purple"
        if(this.state.count === 1){
            textcolor = "red"
        }
        if(this.state.count === 6){
            textcolor = "green"
        }
         return textcolor
       }


    render(){
        return(
            <React.Fragment>
                <div onClick={this.click} style={{border: "1px solid black", padding:"10px",width:"50px",height:"50px",marginLeft:"10px", color:this.color()}}>
                    {this.state.count}
                </div>
            </React.Fragment>
        )
    }

}