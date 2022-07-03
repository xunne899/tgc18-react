import React from 'react'
import AddNew from './pages/AddNew'
import Listing from './pages/Listing'
import axios from 'axios'

export default class RecipeBook extends React.Component {

    url = "https://8888-xunne899-dwadrecipeapi-byefmbidvc9.ws-us47.gitpod.io/"

    state = {
        active: 'listing',  // the `active` variable in the state
        // determines which page to show
        data: [],
        newTitle: "",
        newIngredients: "",
        // deleteTitle: "",
        // deleteIngredients: ""
        listBeingDeleted:null,
    }

    async componentDidMount() {
        let response = await axios.get(this.url + 'recipes');
        this.setState({
            data: response.data
        })
    }


    // processUpdate = () => {
    //     const modifiedTask = {
    //         ...this.state.taskBeingEdited,
    //         description: this.state.modifiedTaskDescription
    //     }

    //     const index = this.state.tasks.findIndex(t => t._id === modifiedTask._id);

    //     // clone the array 
    //     const cloned = this.state.tasks.slice();

    //     // starting at index (first arg), replace one element (second arg) with the modified task (third arg)
    //     cloned.splice(index, 1, modifiedTask);

    //     this.setState({
    //         tasks: cloned,
    //         taskBeingEdited: {
    //             _id: 0
    //         }
    //     })
    // }

    // beginDeleteTask = (task) => {
    //     this.setState({
    //         taskBeingDeleted: task
    //     })
    // }

    // delete = (task) => {
    //     const index = this.state.tasks.findIndex(t => t._id === task._id);
    //     const modified = [
    //         ...this.state.tasks.slice(0, index),  // get all the elements before the index to delete
    //         ...this.state.tasks.slice(index + 1)    // get all the elements after the index to delete
    //     ]
    //     this.setState({
    //         tasks: modified
    //     })
    // }

    processDelete =  (list) => {
        const index = this.state.data.findIndex(t => t._id === list._id);
        const modified = [
            ...this.state.data.slice(0, index),  // get all the elements before the index to delete
            ...this.state.data.slice(index + 1)    // get all the elements after the index to delete
        ]
        this.setState({
            data: modified
        })
     
    }

    





    processAddNew = async () => {

        // if any line of code in the try block causes an error (aka exception)
        // the code execution will jump to the first line in the catch block
        try {
            // 1. add the database via the API
            // the response.data.insertedId will have the new _id of the document
            let response = await axios.post(this.url + 'recipes', {
                'title': this.state.newTitle,
                'ingredients': this.state.newIngredients.split(',')
            })

            // 2. we update React and the new recipe object will have the _id of the database
            const newRecipe = {
                _id: response.data.insertedId,
                title: this.state.newTitle,
                ingredients: this.state.newIngredients.split(',')
            }

            this.setState({
                'data': [...this.state.data, newRecipe],
                'active': 'listing'
            })

        } catch (e) {
            alert("Error adding new recipe. Please contact administrator");
        }





    }

    renderContent() {
        this.state.data.map(list => {
            if (this.state.expenseBeingDeleted !== null && this.state.expenseBeingDeleted._id === list._id) {
                return (
                    <DeleteExpense
                        // expense={expense}
                        description={expense.description}
                        processDelete={() => {
                            this.processDelete(expense)
                        }}
                        cancelDelete={() => {
                            this.cancelDelete(expense)
                        }}
                    />
                )
            }
        if (this.state.active === 'listing') {
            return <Listing data={this.state.data}
                edit={this.edit}
                processDelete={this.processDelete} />
                
        } 
        else if (this.state.active === 'add-new') {
            return <AddNew
                newTitle={this.state.newTitle}
                newIngredients={this.state.newIngredients}
                updateFormField={(key, value) => {
                    this.setState({
                        [key]: value
                    })
                }}
                addNew={this.processAddNew}
            />
        }
    }
        )}

    changePage(page) {
        this.setState({
            'active': page
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className={"nav-link " + (this.state.active === 'listing' ? 'active' : '')} aria-current="page" onClick={() => {
                                this.changePage("listing")
                            }}>
                                Recipes
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link " + (this.state.active === 'add-new' ? 'active' : '')} aria-current="page" onClick={() => {
                                this.changePage("add-new")
                            }}>
                                Add New
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link " + (this.state.active === 'edit' ? 'active' : '')} aria-current="page" onClick={() => {
                                this.changePage("edit")
                            }}>
                                Edit
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={"nav-link " + (this.state.active === 'delete' ? 'active' : '')} aria-current="page" onClick={() => {
                                this.changePage("delete")
                            }}>
                                Delete
                            </button>
                        </li>

                    </ul>
                    {this.renderContent()}
                </div>



            </React.Fragment>
        )
    }
}