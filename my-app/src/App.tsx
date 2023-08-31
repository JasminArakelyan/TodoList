import { useState } from 'react';
import TodoList from './components/TodoList';
import Todo from './components/Todo';
import './App.css';

export type TodosType ={
  id : number,
  title : string,
  isComplited : Boolean
}

export type PropsType ={
  todos : Array<TodosType>
  remove : (id : number) => void
  setTodos : any
}

function App() {
  const [todos, setTodos] = useState([
    {id : 1, title : '**********', isComplited : true},
    {id : 2, title : '##########', isComplited : false}
  ]);
  
  const remove = (id : number) =>{
    setTodos(todos.filter((todo) => todo.id !== id ))
  }

  return (
    <div className="App">
      <Todo todos={todos} remove={remove} setTodos={setTodos} />
      <TodoList todos={todos} remove={remove} setTodos={setTodos}/>
    </div>
  );
}

export default App;
