import React from "react";

export default function Task(props) {
  return (
    <li key={props.task.id}>
      {props.task.description}
      <input
        type="checkbox"
        value={props.task.description === true}
        onChange={() => {
          props.checkTask(props.task.id);
        }}
      />
      <button
        onClick={ () => {
          props.setTaskToEdit(props.task);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          props.deleteTask(props.task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}