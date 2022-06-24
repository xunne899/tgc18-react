
import React from 'react'

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

  export {sayHello , sayGoodbye, foobar}