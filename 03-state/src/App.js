
import NumberBox from './NumberBox';
import AlertBox from './AlertBox';

export default function App() {
  return (
    <div>
    <h1>Our React App</h1>
    <NumberBox initialValue={10}/>
    <NumberBox initialValue={-20}/>
    <AlertBox value ={"Never play with fire"}/>
    </div>
  );
}


// export default class App extends React.Component{
//  state ={
//   foobar:"danger danger awasawas"
//  }


//  render(){
//  return(
//   <div>
//   <h1>Our React App</h1>
//   <NumberBox initialValue={10}/>
//   <NumberBox initialValue={0}/>
//   <AlertBox value ={this.state.foobar}/>
//   </div>
//  )

//  }
// }
 
