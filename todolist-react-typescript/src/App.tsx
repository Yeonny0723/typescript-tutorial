import React, {useState} from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./\btodo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  
  const todoAddHandler = (text: string) => {
    setTodos(prev => [...prev, {id:Date.now().toString(), text}])
  }

  const todoDeleteHandler = (id: string) => {
    setTodos(prev => {return prev.filter(todo => todo.id !== id)})
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
};

export default App;
