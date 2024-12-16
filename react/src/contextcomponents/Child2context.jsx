import React,{useContext} from 'react'
import {mycontext} from '../Appcontext';
const Child2context = () => {
  const child2context=useContext(mycontext);
  return (
    <div>Child2context
       <div> 
        <h1> branch:{child2context.branch}</h1>
       </div>
    </div>
  )
}

export default Child2context