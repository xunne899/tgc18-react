import React from 'react'
import Task from './Task'
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
        newTaskDescription :" "
       
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

    render(){
        return(
            <React.Fragment>
                <h1>Task List</h1>
                <ul>
                    {
                        this.state.tasks.map(t=><React.Fragment>
                           < Task task={t} key={t._id}/>
                        </React.Fragment>)
                    }
                </ul>
                <h2>New Task</h2>
                <div><label>Description:</label>
                <input type="text" className ="form-control" value={this.state.newTaskDescription} name="newTaskDescription" onChange={this.updateFormField}
                /> <button onClick={this.addTask} className="btn btn-primary btn-sm mt-2">Add New Task</button></div>
            </React.Fragment>
        )
    }
} 