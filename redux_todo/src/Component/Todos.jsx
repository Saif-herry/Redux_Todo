import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";


const Todos = () => {

    const [data,setData] = useState([])

 useEffect(() => {
fetch("http://localhost:8080/todos").then((r)=>r.json()).then((d)=>setData(d))

}, [])


    return (
        <div>
           
            <div>
                <h3>Todos:{data.length-1}</h3>
                <TodoInput/>
            </div>
            
           <div>
            {data.map((item)=>{
                return <Todo key={item.id} {...item}/>
            })}
           </div>

        </div>
    )
}

export default Todos