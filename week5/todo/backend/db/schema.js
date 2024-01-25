const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completion: Boolean
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;