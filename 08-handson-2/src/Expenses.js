import React from 'react'

export default function Expenses(props) {
    return (

        <React.Fragment key={props._id}>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Item: {props.description}</h4>
                    </div>
                    <div ClassName="card-text">
                        <h5>Cost: {props.cost}</h5>
                    </div>
                    <button className="btn btn-primary btn-sm"
                        onClick={
                            props.beginEdit
                        }
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger btn-sm ms-1"
                        onClick={
                            props.beginDelete
                        }>
                        Delete
                    </button>
                </div>
            </div>
        </React.Fragment>

    )
}