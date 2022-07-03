import React from 'react'

export default function Listing(props){
    return (
        <React.Fragment>
            <h1 className="mt-2">Recipes</h1>
            {
                props.data.map( r => (
                    <React.Fragment key={r._id}>
                        <div className="card p-2 my-1" >
                            <h3 className="title">
                                {r.title}
                            </h3>
                            <h4>Ingredients</h4>
                            <ul>
                                {r.ingredients.map( i => <li key={i}>{i}</li>)}
                            </ul>
                            <div>
                            <button className="btn btn-primary mt-3"
                             onClick={props.edit}
                             >Edit</button>
                             <button className="btn btn-danger mt-3 ms-2"
                             onClick={props.beginDelete}
                             >Delete</button>
                             </div>
                        </div>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )

}