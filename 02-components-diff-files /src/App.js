import React from 'react';
import Sumoftwo from './SumofTwo';
import {sayHello,sayGoodbye,foobar} from './Funcs'
import Alert from './Alert';
import BorderedImage from './BorderedImage';
import PuppyImage from './PuppyImage';



// function BorderedImage(props){
//   return (<img src={require ("./dog.jpg")} style = {{'border': '4px solid red'}}/>)
// }


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
      <PuppyImage/>
      <Sumoftwo n1={3} n2={6}/>
    </React.Fragment>
  )
}
