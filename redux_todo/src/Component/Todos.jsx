import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Store/action";
import Todo from "./Todo";
import TodoInput from "./TodoInput";


const Todos = () => {

    const {isLoading,isError,data} = useSelector((state)=>state.todos);
    const dispatch = useDispatch();

 useEffect(() => {
getTodo(dispatch)

}, [])
if(isLoading) return <div>
    Loading....
</div>
if(isError) return <div>
    Error occured while loading data
</div>


    return (
        <div>
           
            <div>
                <h3>Todos:{data.length-1}</h3>
                <TodoInput/>
            </div>
            
           <div className="items">
            {data.map((item)=>{
                return <Todo key={item.id} {...item}/>
            })}
           </div>

        </div>
    )
}

export default Todos