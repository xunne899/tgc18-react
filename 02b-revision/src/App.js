// We use `import from` instead of `require`
import logo from './logo.svg';  // const logo = require('./logo.svg')
import './App.css'; // require('./App.js')
import MyImage from './components/MyImage'; 

function foobar() {
  let x = Math.floor(Math.random() * 6 + 1);
  if (x > 3) {
    return "high";
  } else {
    return "low";
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>2 + 2 = {2+2}</p>
        <p>Lucky Number = {Math.floor(Math.random() * 100 + 1)}</p>
        {/* We can call functions within the JSX */}
        {/* The function must evaluate to some value, even null is ok */}
        <p>{foobar()}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Create and render an instance of the MyImage component */}
        <MyImage borderColor="pink"/>
        <MyImage borderColor="white"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
