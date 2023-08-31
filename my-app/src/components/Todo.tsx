import React,{useState, ChangeEvent} from "react";
import { PropsType } from "../App";

const Todo = (props : PropsType) =>{
    const [text, setText] = useState('')

    const changeText = (e : ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }

    const add = () =>{
        if(text.trim()){
            props.setTodos((prevState : any) => {
              return [
                  ...prevState,
                  {
                      id : Date.now(),
                      title : text ,
                      isComplited : false
                  }
              ]
          })
          setText('')
        }
    }

    return (
        <div>
            <input value={text} onChange={(e) =>changeText(e)} />
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Todo