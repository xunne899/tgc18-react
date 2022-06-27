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

// import React from 'react'

// export default class Dice extends React.Component {

//     getRandomNumber() {
//         return Math.floor(Math.random()*6+1)
//     }

//     state = {
//         // set the initial value of number state property to be between 1 to 6
//         'number': this.getRandomNumber(),
//     }

//     roll = async () =>{
//         let number = this.getRandomNumber();
//         this.setState({
//             'number': number,
//         })
//     }

//     getColor(number) {
//         if (number==1) {
//             return 'red';
//         } else if (number == 6) {
//             return 'green';
//         } else {
//           return 'black';
//         }
//     }

//     render() {
     
//         return <React.Fragment>
//             <div style={{
//                 'border': "1px solid black",
//                 'height':"50px",
//                 'width':"50px",
//                 'color': this.getColor(this.state.number)
//             }}
//             onClick={this.roll}
//             >
//                 {this.state.number}
//             </div>
//         </React.Fragment>
//     }
// }