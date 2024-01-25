
const Todos = ({todos}) => {

  return (
    <div>
        {
            todos.map(todo => {
                return (
                    <>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>Mark as done</button>
                    </>
                );
            })
        }
    </div>
  )
}

export default Todos;