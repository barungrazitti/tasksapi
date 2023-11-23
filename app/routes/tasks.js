const express = require('express');
const app = express();

let tasks = [
    {
        "id": 1,
        "task_title": "Small Metal Pizza",
        "task_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "8"
    },
    {
        "id": 2,
        "task_title": "Awesome Fresh Bacon",
        "task_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "7"
    },
    {
        "id": 3,
        "task_title": "Practical Rubber Salad",
        "task_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "4"
    },
    {
        "id": 4,
        "task_title": "Ergonomic Fresh Salad",
        "task_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "1"
    },
    {
        "id": 5,
        "task_title": "Recycled Fresh Shoes",
        "task_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "6"
    },
    {
        "id": 6,
        "task_title": "Incredible Concrete Salad",
        "task_description": "The Football Is Good For Training And Recreational Purposes",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "6"
    },
    {
        "id": 7,
        "task_title": "Gorgeous Granite Pants",
        "task_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "5"
    },
    {
        "id": 8,
        "task_title": "Licensed Wooden Chicken",
        "task_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "0"
    },
    {
        "id": 9,
        "task_title": "Refined Steel Shirt",
        "task_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "2"
    },
    {
        "id": 10,
        "task_title": "Tasty Steel Chips",
        "task_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": "2"
    }
]


app.get("/tasks/", async (req, res) => {
    console.log(tasks);
    res.status(403).send(tasks);
});

app.get("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    console.log(tasks.indexOf(id));
    res.status(403).send({ message: "tasks id" });
});

app.post("/tasks/", async (req, res) => {
    res.status(403).send({ message: "post tasks" });
});

app.put("/tasks/:id", async (req, res) => {
    res.status(403).send({ message: "put tasks id" });
});

app.delete("/tasks/:id", async (req, res) => {
    res.status(403).send({ message: "delete tasks id" });
});



module.exports = app;