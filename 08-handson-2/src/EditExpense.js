import React from 'react'

export default function EditExpense(props){
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <input type="text"
                        name="modifiedExpenseDescription"
                        value={props.modifiedExpenseDescription}
                        onChange={props.updateFormField}/>
                    </div>
                    <div className="card-title">
                        <input type="text"
                            name="modifiedExpenseCost"
                            value={props.modifiedExpenseCost}
                            onChange={props.updateFormField} />
                    </div>
                    <button className="btn btn-primary btn-sm ms-1"
                        onClick={props.updateExpense}>
                        Update
                    </button>


                </div>
            </div>



        </React.Fragment>
    )
}