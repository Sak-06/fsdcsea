import React from 'react'
import './Student.css'
function Student({data}) {
  return (
    <div className='idcard'>
      {/*{
        JSON.stringify(data)
      }*/}
        <table border={'2px solid black'}>
            <tbody>
                <tr style={{backgroundColor:'cyan'}}> <td colSpan={1}><img src={data.pic} height={80} width={100}/></td><td colSpan={2}> {data.college}</td></tr>
                <tr><td>Rollno.</td><td>{data.rollno}</td></tr>
                <tr><td>Name:</td><td>{data.name}</td></tr>
                <tr><td>Branch:</td><td>{data.branch}</td></tr>
                <tr><td>Section:</td><td>{data.section}</td></tr>
            </tbody>
        </table>
    </div>
  )
}
/*Student.defaultProps={
  college:"AKG Engineering college"

}*/

export default Student