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
        taskBeingEdited: null,  // alternatively, store the _id of the task that is being edited
        modifiedTaskName:'',
        
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
        // how we do modify an object
        // task.done = !task.done;  ==> NOT ALLOW TO MUTATE AN OBJECT DIRECTLY
        let clonedTask = { ...task, done: !task.done };

        // replace an element into the middle of an array

        // 1. find the index of the modified task
        // let index = -1;
        // for (let i =0; i < this.state.tasks.length; i++) {
        //     if (this.state.tasks[i]._id === clonedTask._id) {
        //         index = i;
        //         break;
        //     }
        // }

        let index = this.state.tasks.findIndex(function (t) {
            if (t._id === clonedTask._id) {
                return true;
            } else {
                return false;
            }
        })

        // non-functional updating an array
        // let clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask;
        // this.setState({
        //     tasks: clonedTaskArray
        // })

        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index),
                clonedTask,
                ...this.state.tasks.slice(index + 1)
            ]
        })



    }

    beginEditTask = (task) => {
        this.setState({
            taskBeingEdited: task,  // remember which task is being edited
            modifiedTaskName: task.description // store the description of the task that is being edited (for 2 way binding with the textbox)
        })
    }

    displayTask = (task) => {
        return (
            <li className="mt-3">
                {task.description}
                <input type="checkbox"
                    className="form-check-input ms-3"
                    checked={task.done}
                    onChange={() => {
                        this.updateTaskDone(task)
                    }} />
                <button className="ms-3 btn btn-primary btn-sm"
                    onClick={() => {
                        this.beginEditTask(task);
                    }}

                >Edit</button>
            </li>
        )
    }

    displayEditTask = (task) => {
        return (<li className="mt-3">
           <input type="text" name="modifiedTaskName" value={this.state.modifiedTaskName} onChange={this.updateFormField}/>
           <button onClick={this.updateTask} 
                   className="btn btn-primary btn-sm ms-3">Update</button>
        </li>)
    }

    updateTask = () => {
        const modifiedTask = {
            ...this.state.taskBeingEdited,  // copy the key/value pairs from the original task object
            description: this.state.modifiedTaskName // update the description
        }

        // update in the middle of an array 

        // 0. find the index of the task that we want to update
        // let index = this.state.tasks.findIndex( t => t._id === modifiedTask._id);
        let index = this.state.tasks.findIndex(function(t){
            if (t._id===modifiedTask._id) {
                return true;
            } else {
                return false;
            }
        })

        // 1. clone the existing array
        let cloned = this.state.tasks.slice();

        // 2. modify the array
        cloned.splice(index, 1, modifiedTask);

        // 3. replace the original array in the state with the modified one
        this.setState({
            tasks: cloned,
            taskBeingEdited: null
        })
    }

    render() {
        return (<React.Fragment>
            <h1>Todo List</h1>
            {
                this.state.tasks.map(t => (<React.Fragment key={t._id}>

                    {this.state.taskBeingEdited === null || this.state.taskBeingEdited._id !== t._id ?
                        this.displayTask(t)
                        :
                        this.displayEditTask(t)

                    }
                </React.Fragment>))
            }
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

// export default class TaskList extends React.Component {
//     state = {
//         tasks: [
//             {
//                 _id: 1,
//                 description: 'Walk the dog',
//                 done: false
//             },
//             {
//                 _id: 2,
//                 description: 'Water the plants',
//                 done: false
//             },
//             {
//                 _id: 3,
//                 description: 'Pay the bills',
//                 done: false
//             }
//         ],
//         newTaskName: '',
//         taskBeingEdited: null, //alternatively store the _id of the task being edited 
//         modifiedTaskName: ""

//     }

//     updateFormField = (event) => {
//         // `event.target` will contain the element that event happened on
//         // `event.target.value` will contain the value of the target element
//         // `event.target.name` should contain the name of the key that we want to modify in the state
//         this.setState({
//             [event.target.name]: event.target.value
//         })

//     }

//     addNewTask = () => {
//         let newTask = {
//             _id: Math.floor(Math.random() * 100000 + 1),
//             description: this.state.newTaskName,
//             done: false
//         }
//         // step 1: clone the array
//         let cloned = this.state.tasks.slice();

//         // step 2: modify the cloned array
//         cloned.push(newTask);

//         // step 3: replace the cloned array into the state
//         this.setState({
//             'tasks': cloned
//         })
//     }

//     updateTaskDone = (task) => {

//         // alert("Task to toggle =>" + task.description)
//         // task.done = !task.done => not allow to mutate
//         let clonedTask = {
//             ...task,
//             done: !task.done
//         }
//         // replace an element into middle of an array 


//         // find index of modified task
//         let index = this.state.tasks.findIndex(function (t) {
//             if (t._id === clonedTask._id) {
//                 return true
//             } else {
//                 return false
//             }
//         })

//         //non-functional way 
//         // let clonedTaskArray = this.state.tasks.slice();
//         // clonedTaskArray[index] = clonedTask
//         // this.setState({
//         //     tasks: clonedTaskArray
//         // })
//         this.setState({
//             tasks: [
//                 ...this.state.tasks.slice(0, index), clonedTask,
//                 ...this.state.tasks.slice(index + 1)
//             ]
//         })


//     }


//     updateTask =() => {
//         const modifiedTask = {
//             ...this.state.taskBeingEdited,  // copy the key/value pairs from the original task object
//             description: this.state.modifiedTaskName // update the description
//         }

//         // update in the middle of an array 

//         // 0. find the index of the task that we want to update
//         // let index = this.state.tasks.findIndex( t => t._id === modifiedTask._id);
//         let index = this.state.tasks.findIndex(function(t){
//             if (t._id===modifiedTask._id) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })

//         // 1. clone the existing array
//         let cloned = this.state.tasks.slice();

//         // 2. modify the array
//         cloned.splice(index, 1, modifiedTask);

//         // 3. replace the original array in the state with the modified one
//         this.setState({
//             tasks: cloned
//         })
//     }

//     displayTask = (task) => {
//         return (
//             <li>
//             {task.description}
//             <input type="checkbox"
//                 className="form-check-input ms-3"
//                 //    data-id={t._id}
//                 onChange={() => {
//                     this.updateTaskDone(task)
//                 }}
//                 checked={task.done} />

//               <button 
//                className="mt-3 btn btn-primary btn-sm"
//                         onClick={() => {
//                             this.beginEditTask(task);
//                         }}>Edit
//                     </button>

//         </li>
//         );
//     };

//     displayEditTask(task) {
//         return (<li className="mt-3">
//            <input type="text" value={this.state.modifiedTaskName} onChange={this.updateFormField}/>
//            <button onclick={this.updateTask} className="btn btn-primary btn-sm ms-3" >Update</button>
//         </li>)
//     }

//     deleteTask = (task) => {
//         let task_index = this.state.tasks.findIndex(t => t._id === task)

//         let modifiedTasks = [
//             ...this.state.tasks.slice(0, task_index),
//             ...this.state.tasks.slice(task_index + 1)
//         ]

//         this.setState({
//             tasks: modifiedTasks
//         })
//     }


//     beginEditTask =(task)=>{
//         this.setState({
//             taskBeingEdited : task,
//             modifiedTaskName : task.description
//         })
//     }

//     render() {
//         return (<React.Fragment>
//             <h1>Todo List</h1>



//             {
//                 this.state.tasks.map(t => (<React.Fragment key={t._id}>
//                  {this.state.taskBeingEdited !== null || this.state.taskBeingEdited._id !== t._id ?
           

//                     this.displayTask(t)
//                     :
//                     this.displayEditTask(t)
                 
//                     }
               
//                 </React.Fragment>))
//             }
            
//             {/* <ul>
//                 {this.state.tasks.map(t =>
//                     this.state.taskBeingEdited !== t._id
//                         ? this.displayTask(t)
//                         : this.displayEditTask(t)
//                 )}
//             </ul> */}

//             <h2 className="mt-3">Add a new Task</h2>
//             <div>
//                 <label>
//                     Task Name:
//                 </label>
//                 <input type="text"
//                     className="form-control"
//                     value={this.state.newTaskName}
//                     onChange={this.updateFormField}
//                     name="newTaskName"
//                 />
//                 <button className="mt-1 btn btn-primary" onClick={this.addNewTask}>Add</button>
//             </div>
//         </React.Fragment>)

//     }

// }




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