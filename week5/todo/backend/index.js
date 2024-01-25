const express = require("express");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db/schema");
const cors = require("cors");

const app = express(); // express app

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Todo Backend");
});

app.post("/api/create-todo", async (req,res) => {
    
    const { title, description } = req.body;

    // input zod validation
    
    const parsedTodo = createTodo.safeParse({
        title,
        description
    });
    
    if(!parsedTodo.success) {
        return res.status(411).json({
            message: "Invalid Todo"
        });
    }

    // add in mongodb

    const todo = new Todo({
        title,
        description,
        completion: false
    });

    await todo.save();

    res.status(201).json({
        message: "Todo created"
    })
});

app.get("/api/todos", async (req,res) => {
    const allTodos = await Todo.find({});
    res.status(200).json({alltodos});
});

app.put("/api/mark-todo", async (req,res) => {

    const { id } = req.body;

    // input validation
    const parsedTodo = updateTodo.safeParse(id);

    if(!parsedTodo.success) {
        return res.status(411).json({
            message: "Invalid Todo"
        });
    }

    // update in mongodb

    const updatedTodo = await Todo.findByIdAndUpdate(id, {
        completion: true
    });

    res.status(200).json({
        message: "Todo updated"
    })
});

app.delete("/api/delete-todo", (req,res) => {
    res.send("Todo Backend");
});

app.put("/api/update-todo", (req,res) => {
    res.send("Todo Backend");
});

app.listen(3001, () => {
    console.log("Server listening to port at 3001");
});