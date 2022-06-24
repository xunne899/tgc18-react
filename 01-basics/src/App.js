// import for one page only 
import React from 'react'; // const React = require('react)
import logo from './logo.svg'
import'./style.css'

//creates a React component
// App.js is default entry point to all React application
function App(){
  //a React component always must return JSX
  // only one parent is allowed ---  so can lump 2 or more elements under a div or fragment
  return(
    <React.Fragment>
      <h1 className="urgent" style={{
        color:"green",
      }}>Hello World</h1>
    <p>Let there be light</p>
    <img src={logo}/>
    <img src={require('./dog.jpg')}/>
    </React.Fragment>
  )
}
// export out component 
export default App // module.exports =App