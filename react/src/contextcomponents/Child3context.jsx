import React, { useContext } from 'react'
import {mycontext} from '../Appcontext';
const Child3context = () => {
  const child3context=useContext(mycontext);
  return (
    <div>Child3context
      <h1>Section: {child3context.section}</h1>
        <br></br>
    </div>
  )
}

export default Child3context