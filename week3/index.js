const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());
const schema = zod.array(zod.number());

app.get("/health-checkup", (request, response) => {
    const username = request.headers.username;
    const password = request.headers.password;
    const kidneyId = request.query.kidneyId;

    if(username !== "sindhur" || password !== "vidvid12") {
        return response.status(403).json({msg: "Wrong input"});
    }

    if(kidneyId !== 1 && kidneyId !==2) {
        return response.status(400).json({msg: "Wrong input of kidneys"});
    }
})

app.post("/", (request, response) => {
    // kidneys [1,2];
    const kidneys = request.body.kidneys;
    const kidneyLength = kidneys.length;
    const res = schema.safeParse(kidneys);

    response.json({res});
})

// global error handlers
app.use(function(error, req, res, next) {
    res.status(500).json({error: error.message});
})

app.listen(3001);