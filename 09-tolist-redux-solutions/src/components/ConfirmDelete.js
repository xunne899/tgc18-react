import React from 'react'


export default function DeleteTask(props){
return (
    <React.Fragment>
        <li className="list-group-item">
      Are you sure you want to delete Task : <strong>{props.task.description} ?</strong>
      <button className="btn btn-danger btn-sm mt-2 ms-2"
        onClick={() => {
          (props.delete(props.task));
        }}
      >
        Yes
      </button>
      <button className="btn btn-secondary btn-sm mt-2 ms-2"
        onClick={() => {
          (props.cancelDelete(props.task));
        }}
      >
        No
      </button>
      </li>
    </React.Fragment>
)}