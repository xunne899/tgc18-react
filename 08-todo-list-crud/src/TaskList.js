import React from 'react'

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                _id: 1,
                description: 'Walk the dog',
                done: false
            },
            {
                _id: 2,
                description: 'Water the plants',
                done: false
            },
            {
                _id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        newTaskName: '',
        taskBeingEdited: 0,
        modifiedTaskName: ""

    }

    updateFormField = (event) => {
        // `event.target` will contain the element that event happened on
        // `event.target.value` will contain the value of the target element
        // `event.target.name` should contain the name of the key that we want to modify in the state
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    addNewTask = () => {
        let newTask = {
            _id: Math.floor(Math.random() * 100000 + 1),
            description: this.state.newTaskName,
            done: false
        }
        // step 1: clone the array
        let cloned = this.state.tasks.slice();

        // step 2: modify the cloned array
        cloned.push(newTask);

        // step 3: replace the cloned array into the state
        this.setState({
            'tasks': cloned
        })
    }

    updateTaskDone = (task) => {

        // alert("Task to toggle =>" + task.description)
        // task.done = !task.done => not allow to mutate
        let clonedTask = {
            ...task,
            done: !task.done
        }
        // replace an element into middle of an array 


        // find index of modified task
        let index = this.state.tasks.findIndex(function (t) {
            if (t._id === clonedTask._id) {
                return true
            } else {
                return false
            }
        })

        //non-functional way 
        // let clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask
        // this.setState({
        //     tasks: clonedTaskArray
        // })
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index), clonedTask,
                ...this.state.tasks.slice(index + 1)
            ]
        })


    }


    updateTask = task_id => {
        // 1. find the task that is being modified. For this, we use the filter function
        let currentTask = this.state.tasks.filter(t => t._id === task_id)[0];

        // 2. Clone the task
        let modifiedTask = { ...currentTask };

        // 3. Modify the task description
        modifiedTask.description = this.state.modifiedTaskName;

        // 4. Clone the tasks array using map; return each task
        // as it is if that task is not the one we are modifying. if
        // it is, then return the modified task instead.
        let modifiedTasksList = this.state.tasks.map(t => {
            if (t._id !== task_id) {
                return t;
            } else {
                return modifiedTask;
            }
        });

        this.setState({
            tasks: modifiedTasksList
        });
    };

    displayTask = t => {
        return (
            <li key={t._id}>
                {t.description}
                <input
                    type="checkbox"
                    value={t.description === true}
                    onChange={() => {
                        this.checkTask(t._id);
                    }}
                />
                <button
                    onClick={async () => {
                        this.setState({
                            taskBeingEdited: t._id,
                            modifiedTaskName: t.description
                        });
                    }}
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        this.deleteTask(t._id);
                    }}>Delete
                </button>
            </li>
        );
    };

    displayEditTask = t => {
        return (
            <li>
                <input
                    type="text"
                    name="modifiedTaskName"
                    value={this.state.modifiedTaskName}
                    placeholder="Enter new description"
                    onChange={this.updateFormField}
                />

                <button
                    onClick={() => {
                        this.updateTask(t._id);
                        this.setState({
                            taskBeingEdited: 0
                        });
                    }}
                >
                    Update
                </button>
            </li>
        );
    };

    deleteTask = (task) => {
        let task_index = this.state.tasks.findIndex(t => t._id === task)

        let modifiedTasks = [
            ...this.state.tasks.slice(0, task_index),
            ...this.state.tasks.slice(task_index + 1)
        ]

        this.setState({
            tasks: modifiedTasks
        })
    }


    render() {
        return (<React.Fragment>
            <h1>Todo List</h1>



            {/* {
                this.state.tasks.map(t => (<React.Fragment key={t._id}>

                    <li>
                        {t.description}
                        <input type="checkbox"
                            className="form-check-input ms-3"
                            //    data-id={t._id}
                            onChange={() => {
                                this.updateTaskDone(t)
                            }}
                            checked={t.done} />


                    </li>

                    <button
                        onClick={() => {
                            this.deleteTask(t._id);
                        }}>Delete
                    </button>


                </React.Fragment>))
            }
             */}
            <ul>
                {this.state.tasks.map(t =>
                    this.state.taskBeingEdited !== t._id
                        ? this.displayTask(t)
                        : this.displayEditTask(t)
                )}
            </ul>

            <h2 className="mt-3">Add a new Task</h2>
            <div>
                <label>
                    Task Name:
                </label>
                <input type="text"
                    className="form-control"
                    value={this.state.newTaskName}
                    onChange={this.updateFormField}
                    name="newTaskName"
                />
                <button className="mt-1 btn btn-primary" onClick={this.addNewTask}>Add</button>
            </div>
        </React.Fragment>)

    }

}




// import React from 'react'

// export default class TaskList extends React.Component{
//     state={
//         tasks:[
//             {
//                 _id:1,
//                 description:'walk the dog',
//                 done:false
//             },
//             {
//                 _id:2,
//                 description:"water the plants",
//                 done:false
//             },
//             {
//                 _id:3,
//                 description:"pay the bills",
//                 done:false
//             }
//         ],
//          newTaskName:''
//     }

//    updateFormField = (event) =>{
//     //   console.log(event.target.name)
//     this.setState({
//         [event.target.name]: event.target.value
//     })
//    }

//    addNewTask =() =>{
//     let newTask ={
//         _id:Math.floor(Math.random()* 100000 +1),
//         description: this.state.newTaskName,
//         done:false
//     }

//     let cloned =this.state.tasks.slice()
//     cloned.push(newTask)

//     this.setState({
//         'tasks':cloned
//     })

//    }

//     render(){
//         return(<React.Fragment>
//             <h1>ToDo List</h1>
//             {
//                 this.state.tasks.map(t=>(<React.Fragment key={t._id}>
//                     <li>{t.description}
//                       <input type="checkbox" 
//                              className="form-check-input ms-3" 
//                              checked={t.done}/>
//                     </li>
//                 </React.Fragment>))
//             }
//         <h2 class="mt-3">Add a new Task</h2>
//             <div>
//                 <label>
//                     Task Name:
//                 </label>
//                 <input type="text" 
//                        name="newTaskName"
//                        className="form-control" 
//                        onChange={this.updateFormField}
//                        value={this.state.newTaskName}/>
//                 <button className="mt-1 btn btn-primary" onClick={this.addNewTask}>Add</button> 
//             </div>
//         </React.Fragment>)
//     }
// }