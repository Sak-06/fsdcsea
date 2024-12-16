import React from 'react'
import Child1 from './component/Child1'

const Appprops = () => {
   const data=
   { name:'Sakshi',
    branch:'CSE',
    section:'A'}
  return (
    <div><Child1 child1data={data}/></div>
  )
}

export default Appprops