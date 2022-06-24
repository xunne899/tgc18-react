import React from 'react';

function sayHello(){
  return "hello"
}

function sayGoodbye(){
  // jsx are just js objects
  // therefore can be assigned to functions
  let g = <p>Goodbye World</p>
  return g
}


function foobar(){
  return <h3>Foobar!</h3>
}


function Alert(props){

  return <div style={{'backgroundColor':props.bgColor}}>{props.message}</div>
}

// function PuppyImage(){
//   return <img style = {{'border': '4px solid red'}} src={require ('./dog.jpg')} alt="puppy cute"/>
// }


// function BorderedImage(props){
//   return (<img src={require ("./dog.jpg")} style = {{'border': '4px solid red'}}/>)
// }

function BorderedImage(props){
  return (<img src={props.ImageFile} style = {{'border': '4px solid red'}}/>)
}


 function Sumoftwo(props){
  return <h2>{props.n1 + props.n2}</h2>
}

// a component
// 1 a function
// 2 returns jsx
// 3 first alphabet is uppercase
// 4 ca be used in jsx as if an html element
export default function App(){
  return(
    <React.Fragment>
      <h1> Hello world</h1>
      {/* {call a function btween the {} result of function can be rendered out} */}
      {sayHello()}
      {sayGoodbye()}
      {foobar()}
      <Alert bgColor="red" message = "Beware of collision"/>
      <Alert bgColor="yellow" message = "Fuel refill needed"/>
      {/* {require must be outside of props to work} */}
      <BorderedImage ImageFile = {require('./dog.jpg')}/>
      {/* <PuppyImage/> */}
      <Sumoftwo n1={3} n2={6}/>
    </React.Fragment>
  )
}
