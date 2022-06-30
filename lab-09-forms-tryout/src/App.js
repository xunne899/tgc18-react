import React from "react";

import Form from "./Forms";
import Confirmation from "./Confirmation";
export default class App extends React.Component {
 state = {
   username: "",
   email: "",
   submitted: false
 };

 render() {
   return (
     <div className="App">
       {this.state.submitted === false ? (
         <Form
           username={this.state.username}
           email={this.state.email}
           updateFormField={this.updateFormField}
           confirm={this.confirmUpdate}
         />
       ) : (
         <Confirmation
           username={this.state.username}
           email={this.state.email}
         />
       )}
     </div>
   );
 }
 updateFormField = (event) => {
   this.setState({
     [event.target.name]: event.target.value
   });
 };
 confirmUpdate = (event) => {
   this.setState({
     submitted: true
   });
 };
}

