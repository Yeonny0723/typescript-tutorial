import React, {useRef} from "react";
import "./NewTodo.css";

interface NewTodoProps {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null); // Types of property 'current' are incompatible.
    // NewTodo 컴포넌트가 처음 렌더링 될 때 ref가 아무런 태그도 참조하지 않도록 null로 초기화

    const todoSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault() // submit 액션이 서버로 향하지 않도록 디폴트 이벤트 중단 
        const enteredText =  textInputRef.current!.value // 'textInputRef.current' is possibly 'null'.
        props.onAddTodo(enteredText)
    }
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo;