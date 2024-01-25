const zod = require("zod");

/*
    {
        title: String
        desc: string
    }

    {
        id: string
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.string();

module.exports = {
    createTodo,
    updateTodo
}