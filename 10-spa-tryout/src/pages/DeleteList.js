import React from 'react'

export default function DeleteList(props) {
    return(
        <React.Fragment>
            <li className="list-group-item">
                Are you sure you want to delete: {props.title}
                <div>
                    <button className="btn btn-danger btn-sm mx-1" onClick={props.processDelete}>Yes</button>
                    {/* <button className="btn btn-success btn-sm mx-1" onClick={props.cancelDelete}>No</button> */}
                </div>
            </li>
        </React.Fragment>
    )
}