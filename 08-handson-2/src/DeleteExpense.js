import React from 'react'

export default function DeleteExpense(props){
    return(
        <React.Fragment>
            <div className = "card">
            <div className = "card-body">
                <div className="card-title">
                    <h4> Are you sure you want to delete {props.description}</h4>
                    <button className="btn btn-danger btn-sm"
                    onClick={props.processDelete}>Yes</button>
                    <button className="btn btn-success btn-sm ms-1" onClick={props.cancelDelete}>No</button>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}