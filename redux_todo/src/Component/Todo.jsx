import React from "react";

const Todo = ({id,value}) => {
     console.log(id,value)

     const handleDelete=()=>{

     }
    
    return (
        <div>
                <div className="singleitem">
                    <img src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="img"/>
                    <p>{id}</p>
                    <p>{value}</p>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                    </div>
                
        </div>
    )
}

export default Todo;
