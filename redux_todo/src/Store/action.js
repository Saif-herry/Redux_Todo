import axios from "axios";
import { DELETE_TODO, GET_TODO_REQUEST, GET_TODO_SUCCESS, GET_TODO_ERROR } from "./actionTypes";


export const getTodo = async(dispatch) =>{
    dispatch({
        type:GET_TODO_REQUEST,
       
        })
        try{
            let r = await axios.get("http://localhost:8080/todos")
            let d = await r.data;
            dispatch({
                type:GET_TODO_SUCCESS,
                payload:d
            });
        }
        catch(e){
            dispatch({
                type:GET_TODO_ERROR,
            })
        }
    
    
}

export const deleteTodo = async (dispatch,id)=>{
    try{
        let r = await axios.delete(`http://localhost:8080/todos/${id}`)
        
    }
    catch(error){
       console.log("No removed")
    }

    dispatch({
        type:DELETE_TODO,
        payload:id,
    })

}