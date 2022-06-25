
import React from 'react'
import NumberBox from './NumberBox'
import AlertBox from './AlertBox'

export default function App(){
return(
<React.Fragment>
<NumberBox InitialValue={0}/>
<br/>
<AlertBox message={"beware of judgement day"}/>
</React.Fragment>
)}