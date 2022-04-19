import React from "react";

const ToDoLists = (props) => {

   



    return (
        <>
            <div className="todoStyle">

                <button onClick={() => {
                    props.onSelect(props.id);
                }} className="btn1">X</button>
                <li>{props.text}</li>
                <button onClick={()=>{
                    props.onSelect(props.id)
                }} className="btn3" >Edit</button>

            </div>
        </>
    )



};

export default ToDoLists;