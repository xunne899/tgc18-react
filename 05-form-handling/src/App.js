import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SurveyForm from './SurveyForm';


function App() {
  return (
    <React.Fragment>
     <div className="container">
      <h1>SurveyForm</h1>
      <SurveyForm/> 
     </div>
    </React.Fragment>
  );
}

export default App;
