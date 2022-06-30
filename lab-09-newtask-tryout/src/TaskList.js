import React from "react";
import AddTaskForm from "./AddNewTask";
import Task from "./Task";
import EditTask from "./EditTask";
export default class TaskList extends React.Component {
  state = {
    tasks: [
        // {
        //   id: 1,
        //   description: "Walk the dog",
        //   done: false
        // },
        // {
        //   id: 2,
        //   description: "Water the plants",
        //   done: false
        // },
        // {
        //   id: 3,
        //   description: "Pay the bills",
        //   done: false
        // }
    ],
    newTaskName: "",
    modifiedTaskName: "",
    taskBeingEdited: 0
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  displayTask = (t) => {
    return (
      <li key={t.id}>
        {t.description}
        <input
          type="checkbox"
          value={t.description === true}
          onChange={() => {
            this.checkTask(t.id);
          }}
        />
        <button
          onClick={async () => {
            this.setState({
              taskBeingEdited: t.id,
              modifiedTaskName: t.description
            });
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            this.deleteTask(t.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  };

  displayEditTask = (t) => {
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
          onClick={async () => {
            this.updateTask(t.id);
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

  addTask = (e) => {
    // 1. create a new task object
    let newTask = {
      id: Math.floor(Math.random() * 10000 + 9999),
      description: this.state.newTaskName,
      done: false
    };

    // 2. add the task to the back of the task list
    let currentValues = this.state.tasks;
    // 2.1 clone out all the tasks so far, and add the new task at the back
    let modifiedValues = [...currentValues, newTask];

    // 2.2 update the state
    this.setState({
      tasks: modifiedValues,
      newTaskName: ""
    });
  };

  checkTask = (task_id) => {
    // 1. find the task that is being modified. For this, we use the filter function
    let currentTask = this.state.tasks.filter((t) => t.id === task_id)[0];

    // 2. Clone the task
    let modifiedTask = { ...currentTask };

    // 3. Modify the task; if `done` was false, invert to true etc.
    modifiedTask.done = !currentTask.done;

    // 4. Clone the tasks array using map; return each task
    // as it is if that task is not the one we are modifiying. if
    // it is, then return the modified task instead.
    let modifiedTasksList = this.state.tasks.map((t) => {
      if (t.id !== task_id) {
        return t;
      } else {
        return modifiedTask;
      }
    });

    this.setState({
      tasks: modifiedTasksList
    });
  };

  deleteTask = (task_id) => {
    // 1. find the index of the task
    let task_index = this.state.tasks.findIndex((t) => t.id === task_id);

    // 2. make a copy of the array, but skip over the task that we want to delete
    let modifiedTasks = [
      ...this.state.tasks.slice(0, task_index),
      ...this.state.tasks.slice(task_index + 1)
    ];

    this.setState({
      tasks: modifiedTasks
    });
  };

  updateTask = (task_id) => {
    // 1. find the task that is being modified. For this, we use the filter function
    let currentTask = this.state.tasks.filter((t) => t.id === task_id)[0];

    // 2. Clone the task
    let modifiedTask = { ...currentTask };

    // 3. Modify the task; if `done` was false, invert to true etc.
    modifiedTask.description = this.state.modifiedTaskName;

    // 4. Clone the tasks array using map; return each task
    // as it is if that task is not the one we are modifiying. if
    // it is, then return the modified task instead.
    let modifiedTasksList = this.state.tasks.map((t) => {
      if (t.id !== task_id) {
        return t;
      } else {
        return modifiedTask;
      }
    });

    this.setState({
      tasks: modifiedTasksList
    });
  };


  setTaskToEdit =(task)=> {
    this.setState({
            taskBeingEdited: task.id,
            modifiedTaskName: task.description
      });
}

finishUpdateTask = (task) => {
    this.updateTask(task.id);
    this.setState({
      taskBeingEdited: 0
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo List</h1>
        <ul>
          {this.state.tasks.map((t) =>
            this.state.taskBeingEdited !== t.id
              ?  <Task
              task={t}
              setTaskToEdit = {this.setTaskToEdit}
              deleteTask = {this.deleteTask}
              checkTask = {this.checkTask}
            />
              : 
              <EditTask
                task={t}
                modifiedTaskName={this.state.modifiedTaskName}
                updateFormField={this.updateFormField}
                finishUpdateTask={this.finishUpdateTask}
              />

          )}
        </ul>

        {/* <h2>Create new Task</h2>
        <div>
          <label>Task Description</label>
          <input
            type="text"
            name="newTaskName"
            value={this.state.newTaskName}
            onChange={this.updateFormField}
          />
          <button onClick={this.addTask}>Add</button>
        </div> */}
        < AddTaskForm newTaskName={this.state.newTaskName}
          updateFormField={this.updateFormField}
          addTask={this.addTask}/>
      </React.Fragment>
    );
  }
}
