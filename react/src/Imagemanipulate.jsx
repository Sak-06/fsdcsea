import React, { useState } from 'react'
import cat from './cat1.jpg'
function Imagemanipulate() {
    const[h,setHeight]=useState(100);
    const[w,setWidth]=useState(100);
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    const[r,setRotate]=useState(0);
    function incheight(){
        setHeight(h+50);
        alert("incerese height");
    }
    function incwidth(){
        setWidth(w+50);
        alert("incerese Width");
    }
    function changecolor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function rotate(){
        setRotate(r+30)
    }
  return (
    <div>
        <div style={{height:'400px', width:'400px' ,border:'2px solid black', marginTop:'75px', marginLeft:'150' }}>
            <div style={{paddingLeft:'100px',paddingTop:'50px',backgroundColor:`RGB(${red},${blue},${green})` }}>
                <img src={cat} height={h} width={w}></img>
                </div>
            <div style={{marginTop:'100px'}}>
                <button onClick={incheight}> enhanceheight</button>&nbsp;&nbsp;&nbsp;
            <button onClick={incwidth}>enhance width</button>&nbsp;&nbsp;&nbsp;
            <button onClick={rotate}> rotate</button>&nbsp;&nbsp;&nbsp;
            <button onClick={changecolor}>background color change</button>
            </div>
             </div>
        <div></div>
    </div>
  )
}

export default Imagemanipulate