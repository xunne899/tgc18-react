import React from 'react'
import EditExpense from './EditExpense'
import Expenses from './Expenses'


export default class BudgetTracker extends React.Component{
    state={
        expenses:[
            {
                _id:1,
                description:'Bag',
                cost: 100
            },
            {
                _id:2,
                description:'Table',
                cost: 800
            },
            {
                _id:3,
                description:'Laptop',
                cost: 2600
            },
            {
                _id:4,
                description:'Clock',
                cost: 60
            },
            {
                _id:5,
                description:'Shoes',
                cost: 155
            }
        ],
        expenseBeingEdited: null,
        expenseBeingDeleted:null,
        modifiedExpenseDescription: '',
        modifiedExpenseCost : 0

     }

updateFormField = (e) =>{
    this.setState({
        [e.target.name] : e.target.value
    })
}


beginEdit = (e) =>{
    this.setState({
        expenseBeingEdited : e,
        modifiedExpenseDescription: e.description,
        modifiedExpenseCost: e.cost
   
    })
}

updateExpense = () =>{
    const modifiedExpense = {
        ...this.state.expenseBeingEdited,
        description : this.state.modifiedExpenseDescription,
        cost: this.state.modifiedExpenseCost 

    }

    let index = this.state.expenses.findIndex(e=> e._id === modifiedExpense._id)
    // clone
    let cloned = this.state.expenses.slice()
    //modify 
    cloned.splice(index,1,modifiedExpense)
    // replace
    this.setState({
        expenses:cloned,
        expenseBeingEdited:null
    })

}

render(){
    return(
        <React.Fragment>
            <h1>Budget Tracker</h1>
            {this.state.expenses.map(expense=>{
            if(this.state.expenseBeingEdited !== null && this.state.expenseBeingEdited._id === expense._id){
                return (
                    <EditExpense
                        _id={expense.id}
                        modifiedExpenseDescription={this.state.modifiedExpenseDescription}
                        modifiedExpenseCost={this.state.modifiedExpenseCost}
                        updateFormField={this.updateFormField}
                        updateExpense={this.updateExpense}
                    />
                )}else{
                    return(
                        <Expenses 
                        _id={expense._id}
                        description={expense.description}
                        cost ={expense.cost}
                        expense ={expense}
                        beginEdit={()=>{
                            this.beginEdit(expense)
                        }}/>
                    
                        )}
                    //     <NewExpense
                    //     newExpenseDescription={this.newExpenseDescription}
                    //     newExpenseCost={this.newExpenseCost}
                    //     updateFormField={this.updateFormField}
                    //     addNewExpense={this.addNewExpense}
                    // />

            
                })
               }
            
        </React.Fragment>


    )}
}