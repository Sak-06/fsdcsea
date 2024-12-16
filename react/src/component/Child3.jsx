import React from 'react'
import App from '../App'
const Child3 = ({child3data}) => {
  return (
    <div>
         <h1>Name: {child3data.name}</h1>
         <br></br>
         Branch:{child3data.branch}
         <br></br>
         Section:{child3data.section}
         </div>
  )
}

export default Child3