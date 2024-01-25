import axios from "axios";
import { useEffect, useState } from "react"

const Assignment = () => {

    const [idState, setIdState] = useState(1);
  return (
    <div>
        <button onClick={() => setIdState(1)}>1</button>
        <button onClick={() => setIdState(2)}>2</button>
        <button onClick={() => setIdState(3)}>3</button>
        <button onClick={() => setIdState(4)}>4</button>
        <Todo id={idState}/>
    </div>
  )
}

const Todo = ({id}) => {
    
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then(result => result.data)
        .then(result => setTodo(result.todo))
    }, [id]);

    return <div>
        {todo.title} {todo.description}
    </div>
}

export default Assignment;