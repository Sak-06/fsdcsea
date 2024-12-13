import React ,{ useState }from 'react'
import Imagemanipulate from './Imagemanipulate'

function UseofState() {
    const[count,setcount]=useState(0)
    function increase(){
        setcount(count+10)
    }
    function decrease(){
        setcount(count-10)
    }
  return (
    <div>
     <div><p>{count}</p></div>
     <div>
        <button onClick={increase}> DOINCREMENT</button>
     </div>
     <div>
        <button onClick={decrease}> DODECREAMENT</button>
     </div>
     </div>
  )
}

export default UseofState