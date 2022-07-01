import React from 'react'
import AddNewTask from './components/AddNewTask'
import Task from './components/Task'
import EditTask from './components/EditTask'
export default class TaskList  extends React.Component{
    state={
        'tasks':[

            {
                _id:1,
                description:"wash the car",
                done:false
            },
            {
                _id:2,
                description:" pay the bills",
                done:false
            },
            {
                _id:3,
                description:"wash the toilet",
                done:false
            },
        ],
        newTaskDescription :" ",
        modifiedTaskDescription: "",
        taskBeingEdited:{
            _id:0
        },
        taskBeingDeleted: null,

       
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    addTask =(event)=>{
        let newTask ={
            _id:Math.floor (Math.random()*99999+10000),
            description: this.state.newTaskDescription,
            done :false
        }
        const cloned = this.state.tasks.slice()
        cloned.push(newTask)

        this.setState({
            tasks:cloned
        })

                // elegant solution (alternative:)
        // this.setState({
        //     tasks: [...this.state.tasks, newTask]
        // })
    
    }


    updateTaskDone =(task)=>{
        const modifiedTask ={
            ...task,
            done : !task.done // if task.done was true , it is nw false
        }

        const index =this.state.tasks.findIndex(t =>t._id === task._id)
    
    let cloned = [
        ...this.state.tasks.slice(0,index),
        modifiedTask,
        ...this.state.tasks.slice(index+1)
    ]

    this.setState({
        tasks:cloned
    })
    }

    beginEdit =(task)=>{
        this.setState ({
            taskBeingEdited: task,
            modifiedTaskDescription: task.description
        })
    }


    processUpdate =()=>{
        const modifiedTask ={
            ...this.state.taskBeingEdited,
            description:this.state.modifiedTaskDescription
        }
        const index = this.state.tasks.findIndex(t=> t._id === modifiedTask._id)

        const cloned = this.state.tasks.slice()
         // starting at index (first arg), replace one element (second arg) with the modified task (third arg)
         cloned.splice(index, 1, modifiedTask);

         this.setState({
             tasks: cloned,
             taskBeingEdited:{
                 _id:0
             }
         })
    }

    // deleteUser = (task) => {
    //     this.setState({
    //       taskBeingDeleted: task
    //     });
    //   };
    

    // displayDeleteUser = (task) => {
    //     return (
    //       <React.Fragment>
    //         Are you want the user? (user name: {task.name})
    //         <button
    //           onClick={() => {
    //             this.processDeleteUser(task);
    //           }}
    //         >
    //           Yes
    //         </button>
    //         <button
    //           onClick={() => {
    //             this.setState({
    //               taskBeingDeleted: null
    //             });
    //           }}
    //         >
    //           No
    //         </button>
    //       </React.Fragment>
    //     );
    //   };


    //   processDeleteUser = (task) => {
    //     let indexToDelete = this.state.task.findIndex((u) => u._id === task._id);
    
    //     if (indexToDelete === -1) {
    //       return;
    //     }
    
    //     let cloned = this.state.tasks.slice();
    
    //     cloned.splice(indexToDelete, 1);
    
    //     this.setState({
    //       tasks: cloned,
    //       taskBeingDeleted: null
    //     });
    //   };

    delete = (task) => {
        const index = this.state.tasks.findIndex(t => t._id === task._id);
        const modified = [
            ...this.state.tasks.slice(0, index),  // get all the elements before the index to delete
            ...this.state.tasks.slice(index+1)    // get all the elements after the index to delete
        ]
        this.setState({
            tasks: modified
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Task List</h1>
                <ul>
                    {
                        this.state.tasks.map(t=>{
                            if (this.state.taskBeingEdited._id !== t._id) {
                                return <Task
                                task={t} key={t._id} 
                                updateTaskDone={this.updateTaskDone}
                                beginEdit={this.beginEdit}
                                delete ={this.delete}

                               />
                            } else {
                                return <EditTask key={t._id} 
                                                 modifiedDescription={this.state.modifiedTaskDescription}
                                                 updateFormField={this.updateFormField}
                                                 processUpdate={this.processUpdate}/>
                                          
                            }
                        })
                    }
                </ul>
                <AddNewTask newTaskDescription={this.state.newTaskDescription}
                            updateFormField={this.updateFormField}
                            addTask={this.addTask}
                />
            </React.Fragment>
        )
    }
}
