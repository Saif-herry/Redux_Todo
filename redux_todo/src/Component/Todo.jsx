import React from "react";

const Todo = ({id,value}) => {
     console.log(id,value)
    
    return (
        <div>
                <div>
                    <img src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="img"/>
                    <p>{id}</p>
                    <p>{value}</p>
                </div>
        </div>
    )
}

export default Todo;
