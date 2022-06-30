import React from "react";

export default function Confirmation(props) {
 return (
   <React.Fragment>
     <div>
       <h1>Confirmation</h1>
       <ul>
         <li>User name: {props.username}</li>
         <li>Email: {props.email}</li>
       </ul>
     </div>
   </React.Fragment>
 );
}

