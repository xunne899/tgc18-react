import React from 'react'

export default class SurveyForm extends React.Component {
  state = {
    'name': '',
    'email': '',
    'color': '',
    'country': '',
    'fruits': [],
    'hasSubmitted': false
  }


  getNameError = () => {
    if (this.state.name.length < 3) {
      return "Name must have more than 3 characters"
    } else if (this.state.name > 20) {
      return "Name must not exceed 20 characters"
    } else {
      return null
    }
  }


  getEmailError = () => {
    if (this.state.email.includes('@') === false) {
      return "The email is in the wrong format";
    } else {
      return null;
    }
  }

  submit = () => {

    this.setState({
      'hasSubmitted': true
    })

    // check if there is no error
    if (this.getNameError() === null && this.getEmailError() === null) {
      alert("All data is ok!")
    }
  }


  submit = () => {

    this.setState({
      'hasSubmitted': true
    })

    // check if there is no error
    if (this.getNameError() === null && this.getEmailError() === null) {
      alert("All data is ok!")
    }
  }

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateFruitsV = (e) => {
    // 1. check if the value is already in the array
    let currentValues = this.state[e.target.name];
    let modifiedValues;

    // 2. Check if the currently checked checkboxes' values include the target checkbox we just changed
    if (!currentValues.includes(e.target.value)) {
      // if the target checkbox's value does not exist in the array of currently checked values, it means we are checking the checkbox, so we add the value to the array
      modifiedValues = [...currentValues, e.target.value];
    } else {
      // the value is already in the array, means we are unchecking
      // so we should remove the checkbox's value from the array
      modifiedValues = currentValues.filter((element) => {
        // return true if we want to keep this particular element
        // keep the element that we didn't just uncheck
        return element !== e.target.value;
      })
    }

    this.setState({
      [e.target.name]: modifiedValues
    })
  }

  // the most straight forward way
  // two cases:
  // case 1: the value is already in the array
  //          -> remove it from the array
  // case 2: the value is not in the array
  //          -> then we add it to the array
  //values should be immutable --- cannot be changed

  // updateFruitsSF = (evt) => {
  //    // 1. clone
  //    let clone = this.state.fruits.slice();

  //    // 2. modify the clone
  //    // update cloned array
  //   clone.push(evt.target.value)

  //    // 3 replace
  //    this.setState({
  //      fruits: clone
  //    });
  //   }

  // updateFruitsOneLine = (event) => {
  //     // 1. clone the original array
  //     // 2. update the cloned array
  //     // let cloned = [...this.state.fruits, event.target.value];
  //     // this.setState({
  //     //     'fruits': cloned
  //     // })

  //     this.setState({
  //         'fruits':[...this.state.fruits, event.target.value]
  //     })
  // }

  // for tick and untick
  // updateFruitsOne = (event) => {


  //   // check if the value is already in the array
  //   // (i.e check if the checkbox has been checked)
  //   if (this.state.fruits.includes(event.target.value)) {
  //       // how to remove from an array

  //       // 1. clone the original array
  //       let cloned = this.state.fruits.slice();

  //       // 2. remove from the clone
  //       let indexToRemove = -1;
  //       for (let i =0; i < this.state.fruits.length; i++) {
  //           if (this.state.fruits[i] === event.target.value) {
  //               indexToRemove = i;
  //               break;
  //           }
  //       }
  //       cloned.splice(indexToRemove, 1);

  //       // 3. replace the cloned array into the state
  //       this.setState({
  //           'fruits': cloned
  //       })
  //   } else {
  //       // React community believes in values should be immutable
  //       // this only applies to array

  //       // 1. clone the original array
  //       let cloned = this.state.fruits.slice();

  //       // 2. update the cloned array
  //       cloned.push(event.target.value)

  //       // 3. set the cloned array back into the state
  //       this.setState({
  //           'fruits': cloned
  //       })
  //   }   
  // }



  //   updateFruitsTwo = (event) => {

  //     if (this.state.fruits.includes(event.target.value)) {
  //         // removing
  //         let indexToRemove = this.state.fruits.indexOf(event.target.value);
  //         let cloned = [
  //             ...this.state.fruits.slice(0, indexToRemove),
  //             ...this.state.fruits.slice(indexToRemove+1)
  //         ]
  //         this.setState({
  //             'fruits':cloned
  //         })
  //     } else {
  //     // 1. clone the original array
  //     // 2. update the cloned array
  //     // let cloned = [...this.state.fruits, event.target.value];
  //     // this.setState({
  //     //     'fruits': cloned
  //     // })

  //     this.setState({
  //         'fruits':[...this.state.fruits, event.target.value]
  //     })

  //     }

  // }



  updateFruits = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      // case 1: the array already  have the value

      // 1. clone
      let clone = this.state.fruits.slice();

      // 2. modify the clone
      let indexToRemove = this.state.fruits.findIndex(function (fruit) {
        return fruit === evt.target.value; // <-- evt.target.value is the value of the checkbox that has been just checked
      });
      clone.splice(indexToRemove, 1);

      // 3 replace
      this.setState({
        fruits: clone
      });
    } else {
      // case 2: the array don't have the value
      // 1. make a clone of the original array
      let clone = this.state.fruits.slice();

      // 2. change the clone
      clone.push(evt.target.value);

      // 3. replace the array in the state with the clone
      this.setState({
        fruits: clone
      });
    }
  };

  updateFruitsV2 = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      let clone = this.state.fruits.filter(function (f) {
        return f !== evt.target.value;
      });
      this.setState({
        fruits: clone
      });
    } else {
      // 1. clone
      // eg. if fruits = ['apples','oranges']
      const clone = [...this.state.fruits];
      // => const clone = ['apples', 'oranges']

      // 2. modify
      clone.push(evt.target.value);

      // 3. replace
      this.setState({
        fruits: clone
      });
    }
  };

  updateFruitsV3 = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      // let indexToRemove = this.state.fruits.findIndex(
      //   (f) => f === evt.target.value
      // );
      // let clone = [
      //   ...this.state.fruits.slice(0, indexToRemove), // <-- only includes those before index to remove
      //   ...this.state.fruits.slice(indexToRemove + 1) // <-- only includes those after index to remove
      // ];
      // this.setState({
      //   fruits: clone
      // });
      let indexToRemove = this.state.fruits.findIndex(
        (f) => f === evt.target.value
      );
      this.setState({
        fruits: [
          ...this.state.fruits.slice(0, indexToRemove),
          ...this.state.fruits.slice(indexToRemove + 1)
        ]
      });
    } else {
      // const clone = [...this.state.fruits, evt.target.value];
      // eg. if fruits = ['apples','oranges']
      // then: const clone = [...this.state.fruits]
      //    => const clone = ["apples", "oranges"]

      this.setState({
        fruits: [...this.state.fruits, evt.target.value]
      });
    }
  };




  render() {

    // // 1. check if the value is already in the array
    // let currentValues = this.state[e.target.name];
    // let modifiedValues;

    // // 2. Check if the currently checked checkboxes' values include the target checkbox we just changed
    // if (!currentValues.includes(e.target.value)) {
    // // if the target checkbox's value does not exist in the array of currently checked values, it means we are checking the checkbox, so we add the value to the array
    // 	modifiedValues = [...currentValues, e.target.value];
    // } else {
    // 	// the value is already in the array, means we are unchecking
    // 	// so we should remove the checkbox's value from the array
    // 	modifiedValues = currentValues.filter((element)=>{
    // 		// return true if we want to keep this particular element
    // 		// keep the element that we didn't just uncheck
    // 		return element !== e.target.value;
    // 	})
    // }

    // this.setState({
    // 	[e.target.name]: modifiedValues
    // })

    return (
      <React.Fragment>
        <div>
          <label>Name:</label>
          <input name="name" type="text" value={this.state.name} onChange={this.updateFormField} />{this.getNameError() && this.state.hasSubmitted ? <span className="error">{this.getNameError()}</span> : ""}
        </div>
        <div>
          <label>Email:</label>
          <input name="email" type="text" value={this.state.email} onChange={this.updateFormField} />{this.getEmailError() && this.state.hasSubmitted ? <span className="error">{this.getEmailError()}</span> : ''}
        </div>
        <div>
          <label>Favourite Color:</label>
          <input name="color" type="radio" value="red" checked={this.state.color === "red"} onChange={this.updateFormField} />Red
          <input name="color" type="radio" value="blue" checked={this.state.color === "blue"} onChange={this.updateFormField} />Blue
          <input name="color" type="radio" value="green" checked={this.state.color === "green"} onChange={this.updateFormField} />Green
        </div>
        <div>
          <label>Country:</label>
          <select name="country" value={this.state.country} onChange={this.updateFormField}>
            <option value="singapore">Singapore</option>
            <option value="malaysia">Malaysia</option>
            <option value="indonesia">Indonesia</option>
          </select>
        </div>
        <div>
          <label>Fruits:</label>
          <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruitsV} checked={this.state.fruits.includes('apple')} />Apple
          <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruitsV} checked={this.state.fruits.includes('orange')} />Orange
          <input type="checkbox" name="fruits" value="banana" onChange={this.updateFruitsV} checked={this.state.fruits.includes('banana')} />Banana
          <input type="checkbox" name="fruits" value="durian" onChange={this.updateFruitsV} checked={this.state.fruits.includes('durian')} />Durian
        </div>
        <button onClick={this.submit}>Submit</button>
      </React.Fragment>
    )
  }
}