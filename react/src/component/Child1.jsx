import React from 'react'
import Appprops from '../Appprops'
import Child2 from './Child2'
const Child1 = ({child1data}) => {
  return (
    <div>
        {/* Name:{child1data.name} */}
        <Child2 child2data={child1data}/>
    </div>
  )
}

export default Child1