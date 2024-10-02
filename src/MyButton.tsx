import React from 'react'
import {useState} from "react"
import { studentList } from './components/data'

const style = { margin: "20px", border: "1px solid gray", width: "400px", borderRadius: "20px",padding:"10px" };
const btn= { margin:"5px", padding:"5px"}

const form = {
    border:"1px solid black",
    width:"200px",
    height:"200px"
}
const fieldset ={
    // background:"red",
    padding:"20px",
    border:"1px solid teal",
    fontSize:"18px"
}
const MyButton= () => {

const [currentPage, setCurrentPage] = useState(1);
const recordPerPage = 3;
const lastIndex = currentPage *recordPerPage;
const firstIndex = lastIndex -recordPerPage;
const records = studentList.slice(firstIndex, lastIndex);
const numberOfPages = Math.ceil(studentList.length/recordPerPage)
    const numbers = [...Array(numberOfPages + 1).keys()].slice(1)
console.log(numbers)
 
    return (
        <div>

            {records.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1 style={style}>{item.title}</h1>
                    </div>
                )
            })}
            {
                numbers.map((item)=>(
                    <button style={btn} onClick={()=>setCurrentPage(item)}>{item}</button>
                ))
            }

            <form action="" style={form}>
                <input type="text" placeholder='enter your name' />
                <fieldset style={fieldset}>
                    <legend>kawsar firoz</legend>
                </fieldset>
            </form>
        
        </div>
    )
}

export default MyButton