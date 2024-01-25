import { useEffect, useState } from "react";
import axios from "axios";

const TodosUseEffect = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
        .then((result) => result.todos)
        .then((result) => {
            setTodos(result)
        })
    }, []);

  return (
    <div>
        {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}

export default TodosUseEffect