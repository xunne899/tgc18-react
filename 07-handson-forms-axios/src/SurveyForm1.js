import React from 'react'
import axios from 'axios'
export default class SurveyForm1 extends React.Component{
    
  
  async componentDidMount(){
    let enquiriesResponse = await axios.get('./enquiries.json');
    let countryResponse = await axios.get('./countries.json');
    let contactsResponse = await axios.get('./contacts.json');
    this.setState({
      allEnquiries: enquiriesResponse.data,
      allCountries: countryResponse.data,
      allContacts: contactsResponse.data,
      loaded:true
    })

    //loading in parallel
//     let enquiryRequest = axios.get('/enquiries.json');
//     let countryRequest = axios.get('/countries.json');
//     let contactRequest = axios.get('/contacts.json');
// let [contactResponse, enquiryResponse, countryResponse]
// = await axios.all([contactRequest, enquiryRequest, countryRequest]);
// this.setState({
// 'allCountries': countryResponse.data,
// 'allEnquiries': enquiryResponse.data,
// 'allContacts': contactResponse.data
// })
  }
  
  
  state = {
        firstname:'',
        lastname:'',
        enquiry:'',
        country:'',
        contacts:[],
        allEnquiries:[],
        allCountries:[],
        allContacts:[],
        loaded : false
    
  }


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



  //   updateEmail = (event) => {
  //     this.setState({
  //         'email': event.target.value
  //     })
  // }

  // updateColour = (event) => {
  //     this.setState({
  //         'colour': event.target.value
  //     })
  // }

  // updateCountry = (event) => {
  //     this.setState({
  //         'country': event.target.value
  //     })
  // }


    renderEnquiry(){
      let options =[];
      for (let e of this.state.allEnquiries){
        options.push(<React.Fragment key={e.value}>
        <input type="radio"
        name="enquiry"
        value={e.value}
        className="form-check-input"
        onChange={this.updateFormField}
        checked={this.state.enquiry === e.value}
    />
    <label className="form-check-label">{e.display}</label>
        </React.Fragment>
        )
      }
      return options;
    }




    updateContact = (e) => {
        if (this.state.contacts.includes(e.target.value)) {
          // case 1: the checkbox has already been checked, and now it's being unchecked
          // 1. clone
          const clone = this.state.contacts.slice();
          // 2. modify (removing element at indexToremove)
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
          // const clone = this.state.contacts.slice();
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
  if (this.state.loaded) {
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
          {this.renderEnquiry()}
        </div>
        <div>
            <label>Country:</label>
            <select className="form-control" value={this.state.country} name="country" onChange={this.updateFormField}>
                            {this.state.allCountries.map( c =><option value={c.value}  key={c.value}>
                                {c.display}
                            </option>)}
    
                            {/* {
                        (() => {
                            let options = [];
                            for (let c of this.state.allCountries) {
                                options.push(<option key={c.value} value={c.value}>{c.display}</option>)
                            }
                            return options;
                        })()
                    } */}

                        </select>
        </div>
        <div>
        <label>Contact Form:</label> 
        {
                            this.state.allContacts.map( c =><React.Fragment key={c.value}>
                          
                                <input type="checkbox" onChange={this.updateContact} className="form-check-input" value={c.value}  checked={this.state.contacts.includes(c.value)}/>
                                <label className="form-check-label">{c.display}</label>
                            </React.Fragment>)
                        }
        </div>
        <button onClick = {this.clickSubmit}>Submit</button>
        </React.Fragment>
    )
} else{
  return <p>Loading... please wait</p>
}
}
}