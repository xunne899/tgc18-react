import React from "react"

export default function EditTask(props) {
    return (
      <li>
        <input
          type="text"
          name="modifiedTaskName"
          value={props.modifiedTaskName}
          placeholder="Enter new description"
          onChange={props.updateFormField}
        />

        <button
          onClick={() => props.finishUpdateTask(props.task)}
        >
          Update
        </button>
      </li>
    );
}

