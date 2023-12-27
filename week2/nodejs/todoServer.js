/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.   
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const data = require("./todos.json");
  const fs = require("fs");
  
  const app = express();
  
  app.use(bodyParser.json());

  // utility functions
  const readData = () => {
    return new Promise((resolve) => {
      fs.readFile("todos.json", "utf-8", (err, data) => {
        resolve(JSON.parse(data));
      })
    })
  }

  const writeData = (dataJSON) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("todos.json", dataJSON, "utf-8", (err, data) => {
      if(err){
        reject(err);
      } 
      else {
        console.log("Added Successfully");
        resolve();
      }
    })
  })}

  app.get("/", (request, response) => {
    response.status(200).send("<h1>Todo App</h1>")
  })

  app.get("/todos", async (request, response) => {
    readData()
    .then(data => response.status(200).json(data))
  })

  app.get("/todos/:id", (request, response) => {
    const id = parseInt(request.params.id);

    readData()
    .then((data) => data.find((element) => element.id === id))
    .then((idObject) => {
      if(idObject) {
        console.log(idObject);
        return response.status(200).json(idObject)
      }
      else {
        return response.status(404).end();
      }
    })
  })

  app.post("/todos", (request, response) => {
    const newTodo = request.body;
    let dataToBePosted;

    if(!newTodo.title) {
      return response.status(400).json({error: "No title Provided"});
    }

    if(!newTodo.description) {
      return response.status(400).json({error: "No description Provided"});
    }

    // concat to data
    readData()
    .then(data => {
      dataToBePosted = {
        id: data.length === 0 ? 1 : Math.max(...(data.map(element => element.id))) + 1,
        title: newTodo.title,
        description: newTodo.description,
        completed: newTodo.completed || false,
      }
      return data.concat(dataToBePosted);
    })
    .then(data => {
      writeData(JSON.stringify(data))
      .then(() => response.status(201).json(dataToBePosted))
    })
  })

  app.put("/todos/:id", (request, response) => {

    const id = parseInt(request.params.id);
    const updatedBody = request.body;

    readData()
    .then((data) => {
      const isObject = data.find(element => element.id === id);
      if(isObject) {
        const dataToBePosted = {
          id: id,
          title: updatedBody.title,
          description: updatedBody.description,
          completed: updatedBody.completed || false,
        }
        writeData(JSON.stringify(data.map((element) => element.id === id ? dataToBePosted : element)))
        .then(() => {
          response.status(200).json(updatedBody)
        })
      }
      else {
        return response.status(404).json({error: "Todo Not Found"});
      }
    })
  })

  app.delete("/todos/:id", (request, response) => {
    const id = parseInt(request.params.id);

    readData()
    .then((data) => {
      const isObject = data.find(element => element.id === id);
      if(isObject) {
        writeData(JSON.stringify(data.filter(element => element.id !== id)))
        .then(() => response.status(200).json(data))
      }
      else {
        return response.status(404).json({error: "Todo Not Found"});
      }
    })
  });

  app.get("*", (request, response) => {
    response.status(404).send("Route not found");
  })

  const PORT = 3001; // process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  })
  
  module.exports = app;