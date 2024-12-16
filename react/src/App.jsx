import React, { useState } from 'react'
import Student from './Student'
import UseofState from './UseofState'
import Imagemanipulate from './Imagemanipulate'
import Login from './Login'
import Registration from './Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainlayout from './Mainlayout'
import Appprops from './Appprops'


function App() {
  const[rdata,setrdata]=useState();
  
//   const studentdata=[{
//     college:"ABES ENGINEERING COLLEGE",
//     name:"sakshi",
//     pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//     rollno:"234",
//     branch:"CSE",
//     section:"A"

//   },
//   {
//     college:"IIT Bombay",
//     name:"Sakshi",
//     pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//     rollno:"234",
//     branch:"CSE",
//     section:"A"

//   }
// ]
  return (
    // <div style={mystyle}>ABES ENGINEERING COLLEGE
    // <div style={mystyle}>{a}</div>
    // <div style={{color:'blue',backgroundColor:'cyan', display:'flex'}}>
    //   <Student data={studentdata[1]}/>
      /*<Student pic={<img src={logo} height={80} width={80}/>} rollno="234" name="sakshi" branch="CSE" section="A"/>
    <Student college="ABES ENGINEERING COLLEGE" pic={<img src={logo} height={80} width={80}/>} rollno="234" name="sakshi" branch="CSE" section="A"/>*/
    <div>
      
      <Appprops/>

      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        </Route>
        </Routes>
        </BrowserRouter> */}
      {/* <div>{JSON.stringify(rdata)}</div>
      <h2> Login Form </h2>
      <br></br>
      <Login logindata={rdata}/>
      <br></br>
      <h2>Registration form</h2>
      <br></br>
      <Registration regData={setrdata}/>
      <></> */}
    </div>

  )
}

export default App