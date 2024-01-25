import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/todos")
    .then(result => result.json())
    .then(result => setTodos(result));
  }, []);

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App;