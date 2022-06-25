
import './App.css';
import NumBox from './NumBox';
import React from 'react';
import Dice from './Dice';
import Tickle from './Tickle';


export default function App() {
  return (
    <React.Fragment>
    <div>
   <Tickle/>
   <NumBox/>
   </div><br/>
   <Dice/>
   
    </React.Fragment>
  );
}


