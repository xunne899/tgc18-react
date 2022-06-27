
import NumberBox from './NumberBox';
import AlertBox from './AlertBox';

function App() {
  return (
    <div>
    <h1>Our React App</h1>
    <NumberBox initialValue={10}/>
    <NumberBox initialValue={0}/>
    <AlertBox value ={"Never play with fire"}/>
    </div>
  );
}

export default App;
