import React from 'react'

export default class SurveyForm extends React.Component{
    state = {
        'name':'',
        'color':'',
        'country':'',
        'fruits':[]
    }


    updateFormField =(e)=>{
        this.setState({
         [e.target.name] :e.target.value
        })
       }
     
    
      // the most straight forward way
      // two cases:
      // case 1: the value is already in the array
      //          -> remove it from the array
      // case 2: the value is not in the array
      //          -> then we add it to the array
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




render(){

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

        return(
            <React.Fragment>
            <div>
                <label>Name:</label>
                <input name="name" type="text" value={this.state.name} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Favourite Color:</label>
                <input name="color" type="radio" value="red" checked={this.state.color ==="red"} onChange={this.updateFormField}/>Red
                <input name="color" type="radio" value="blue" checked={this.state.color ==="blue"} onChange={this.updateFormField}/>Blue
                <input name="color" type="radio" value="green" checked={this.state.color ==="green"} onChange={this.updateFormField}/>Green
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
                <input type="checkbox" name="fruits" value="apple"  onChange={this.updateFruitsV3} checked={this.state.fruits.includes('apple')}/>Apple
                <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruitsV3} checked={this.state.fruits.includes('orange')}/>Orange
                <input type="checkbox" name="fruits" value="banana" onChange={this.updateFruitsV3} checked={this.state.fruits.includes('banana')}/>Banana
                <input type="checkbox" name="fruits" value="durian" onChange={this.updateFruitsV3} checked={this.state.fruits.includes('durian')}/>Durian
            </div>
            <button>Submit</button>
            </React.Fragment>
        )
    }
}