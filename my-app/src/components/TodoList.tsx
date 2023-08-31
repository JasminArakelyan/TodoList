import React from "react";
import { PropsType } from "../App";

const TodoList = (props : PropsType) =>{
    return (
        <ul>
            {
                props.todos.map((i)=>{
                    return <li key={i.id}>
                        <span>{i.title}</span>
                        <button onClick={() => props.remove(i.id)}>X</button>
                    </li>
                })
            }
        </ul>
    )
}

export default TodoList