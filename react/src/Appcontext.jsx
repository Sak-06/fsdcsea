import React from 'react'
import Child3context from './contextcomponents/Child3context';
import Child1context from './contextcomponents/Child1context';
import Child2context from './contextcomponents/Child2context';
import { createContext } from 'react'
const mycontext=createContext();
const Appcontext = () => {
    const data={
        name:"Sakshi",
        branch:"CSE",
        section:"A"
    }
  return (
    <div>Appcontext
        <mycontext.Provider value={data}>
            <Child1context/>
           <Child2context/>
           <Child3context/> 
        </mycontext.Provider>
    </div>
  )
}
export {
    mycontext
}


export default Appcontext