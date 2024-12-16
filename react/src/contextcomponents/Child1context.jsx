import React, { useContext } from 'react'
import {mycontext} from '../Appcontext';
const Child1context = () => {
  const child1context=useContext(mycontext);
  return (
    <div>Child1context
      <br></br>
      <h1>Name: {child1context.name}</h1>
              <br></br>
    </div>

  )
}

export default Child1context