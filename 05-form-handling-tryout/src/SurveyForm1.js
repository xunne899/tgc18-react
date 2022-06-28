import React from 'react'

export default class SurveyForm1 extends React.Component{
    state = {
        firstname:'',
        lastname:'',
        enquiry:'',
        country:'',
        contacts:[]
    }


    // updateFirstName = (e) =>{
    //   this.setState({
    //     firstname: e.target.value
    //   })
    // }

    // updateFormFieldEx = (event, name) =>{
    //     this.setState({
    //         [name]: event
    //     })
    // }

    // createUpdateFormFieldFunction = (name) => {
    //     return (event) =>{
    //         this.setState({
    //             [name]:event.target.value
    //         })
    //     }
    // }

 clickSubmit = () =>{
  alert(`Firstname:${this.state.firstname}
  Lastname:${this.state.lastname}
  Enquiry:${this.state.enquiry}
  Country:${this.state.country}
  Contacts:${this.state.contacts}`)
 }
    updateFormField =(e) =>{
      // let VarName = e.target.name
        this.setState({
            [e.target.name] : e.target.value
            // [VarName] : e.target.value
        })
    }

    updateContact = (e) => {
        if (this.state.contacts.includes(e.target.value)) {
          // case 1: the checkbox has already been checked, and now it's being unchecked
          // 1. clone
          const clone = this.state.contacts.slice();
          // 2. modify
          const indexToRemove = this.state.contacts.findIndex(function (c) {
            return c === e.target.value;
          });
          clone.splice(indexToRemove, 1);
          // 3. replace
          this.setState({
            contacts: clone
          });
        } else {
          // case 2: the checkbox has not been checked and now it's being checked
          // 1. clone the array
          const clone = [...this.state.contacts];
          // 2. modify the clone
          clone.push(e.target.value);
          // 3. replace the clone into state
          this.setState({
            contacts: clone
          });
        }
      };

render(){
    return(
        <React.Fragment>
          <h1>Contact Form</h1>
        <div>
            <label>First Name:</label>
            <input name="firstname" type="text" value={this.state.firstname} onChange={this.updateFormField}/>
        </div>
        <div>
            <label>Last Name:</label>
            <input name="lastname" type="text" value={this.state.lastname} onChange={this.updateFormField}/>
        </div>
        <div>
            <label>Type of enquiry:</label>
            <input name="enquiry" type="radio" value="support" onChange={this.updateFormField} checked={this.state.enquiry === "support"}/>
            <a>Support</a>
            <input name="enquiry" type="radio" value="sales" onChange={this.updateFormField} checked={this.state.enquiry === "sales"}/>
            <a>Sales</a>
            <input name="enquiry" type="radio" value="marketing" onChange={this.updateFormField} checked={this.state.enquiry === "marketing"}/>
            <a>Marketing</a> 
        </div>
        <div>
            <label>Country:</label>
            <select name="country" value={this.state.country} onChange={this.updateFormField}>
                <option value="singapore">Singapore</option>
                <option value="malaysia">Malaysia</option>
                <option value="thailand">Thailand</option>
                <option value="indonesia">Indonesia</option>
            </select>
        </div>
        <div>
        <label>Contact:</label> 
        <input type="checkbox" name="contacts" value="email" onChange={this.updateContact} checked={this.state.contacts.includes('email')}/>
        <a>Email</a>
        <input type="checkbox" name="contacts" value="phone" onChange={this.updateContact} checked={this.state.contacts.includes('phone')}/>
        <a>Phone</a>
        <input type="checkbox" name="contacts" value="mail" onChange={this.updateContact} checked={this.state.contacts.includes('mail')}/>
        <a>Mail</a>
        </div>
        <button onClick = {this.clickSubmit}>Submit</button>
        </React.Fragment>
    )
}

}