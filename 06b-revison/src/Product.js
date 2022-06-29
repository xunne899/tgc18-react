import React from 'react';

export default function Product(props){
 return ( <div class="card">
 <div className="card-body">
   <h3 class="card-title">{props.product.name}</h3>
   <ul>
     <li>Cost:{props.product.cost}</li>
     <li>Stock:{props.product.stock}</li>
   </ul>
 </div>
</div>)

}