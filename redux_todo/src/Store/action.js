import { GET_TODO,DELETE_TODO } from "./actionTypes";


export const getTodo = async(dispatch) =>{
    let r = await fetch("http://localhost:8080/todos")
    let d = await r.json();
    dispatch({
        type:GET_TODO,
        payload:d,
        })


}