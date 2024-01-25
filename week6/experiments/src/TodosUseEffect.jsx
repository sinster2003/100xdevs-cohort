import { useEffect, useState } from "react";

const TodosUseEffect = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
            .then((result) => result.json())
            .then((result) => setTodos(result.todos))
            .catch(error => console.log(error));
        },10000);
    }, []);

  return (
    <div>
        {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
    </div>
  )
}

export default TodosUseEffect