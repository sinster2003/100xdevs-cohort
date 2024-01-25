import { useState } from 'react'

let count = 4;
const Todo = () => {

    const [todos, setTodos] = useState([
        {
            id:1,
            title: "Gym",
            description: "Yess"
        },
        {
            id:2,
            title: "Work",
            description: "Yess"
        },
        {
            id:3,
            title: "Sleep",
            description: "Yess"
        }
    ]);

    function addTodo() {
        setTodos(todos.concat({
            id: count++,
            title: "Eat",
            description: "Repeat"
        }))
    }


  return (
    <div>
    <button onClick={addTodo}>Add To Todo</button>
    {todos.map((todo) => <TodoComponent key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
)
}

const TodoComponent = ({title, description}) => {
    return(<h1>{title} : {description}</h1>)
}

export default Todo