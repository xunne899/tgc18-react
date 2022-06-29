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
        newTaskName:''
    }

    updateFormField = (event) => {
        // `event.target` will contain the element that event happened on
        // `event.target.value` will contain the value of the target element
        // `event.target.name` should contain the name of the key that we want to modify in the state
        this.setState({
            [event.target.name] : event.target.value
        })

    }
    
    addNewTask = () =>{
        let newTask ={
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
            'tasks':cloned
        })
    }

    updateTaskDone = (task)=>{
        // alert("Task to toggle =>" + task.description)
        // task.done = !task.done => not allow to mutate
        let clonedTask = {...task,
            done: !task.done}
        // replace an element into middle of an array 


        // find index of modified task
        let index = this.state.tasks.findIndex(function(t){
            if(t._id === clonedTask._id){
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
    tasks:[
        ...this.state.tasks.slice(0,index),clonedTask,
        ...this.state.tasks.slice(index+1)
    ]
   })
   
   
    }

    render() {
        return (<React.Fragment>
            <h1>Todo List</h1>
            {
                this.state.tasks.map(t => (<React.Fragment key={t._id}>
                    <li>
                        {t.description}
                        <input type="checkbox"
                               className="form-check-input ms-3" 
                            //    data-id={t._id}
                               onChange={()=>{
                                this.updateTaskDone(t)
                               }}
                               checked={t.done}/>
                    </li>
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