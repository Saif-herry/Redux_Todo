import React from "react";
import {useDispatch} from "react-redux"
import { deleteTodo } from "../Store/action";

const Todo = ({id,value}) => {

     console.log(id,value)
     const dispatch = useDispatch();

     const handleDelete= ()=>{
        deleteTodo(dispatch,id)
     }
    
    return (
        <div>
                <div className="singleitem">
                    <img src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="img"/>
                    <p>{id}</p>
                    <p>{value}</p>
                    <button onClick={handleDelete}>Delete</button>
                    </div>
                
        </div>
    )
}

export default Todo;
