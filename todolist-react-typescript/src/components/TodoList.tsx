import React from "react";
import "./TodoList.css";

// const todos =  [{id:"t1", text:"명절 내려가기"}]
interface TodoProps {
    items: {id: string, text:string}[],
    onDeleteTodo: (id: string) => void,
}


const TodoList:React.FC<TodoProps> = props => {
    
    return <ul>
        {props.items.map(item=>(
            <li key={item.id}>
                <span>{item.text}</span>
                <button onClick={()=> {props.onDeleteTodo(item.id)}}>DELETE</button>
            </li>
        ))}
    </ul>
};

export default TodoList;
