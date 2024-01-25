import React from 'react'

const CreateTodo = () => {
  return (
    <div>
        <input type="text" placeholder="title" style={{
            padding: 10,
            margin: 10
        }}/>
        <br/>
        <input type="text" placeholder="description" style={{
            padding: 10,
            margin: 10
        }}/>
        <br/>
        <button style={{
            padding: 10,
            margin: 10
        }}>Add a todo</button>
    </div>
  )
}

export default CreateTodo;