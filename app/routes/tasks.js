const express = require('express');
const router = express.Router();

let tasks = [
    {
        "id": 1,
        "task_title": "Small Metal Pizza",
        "task_description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "task_created": "2023-03-23T14:04:37.3737+01:00",
        "task_status": 0
    },
    {
        "id": 2,
        "task_title": "Awesome Fresh Bacon",
        "task_description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": 1
    },
    {
        "id": 3,
        "task_title": "Practical Rubber Salad",
        "task_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "task_created": "2023-01-23T14:04:37.3737+01:00",
        "task_status": 0
    },
    {
        "id": 4,
        "task_title": "Ergonomic Fresh Salad",
        "task_description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "task_created": "2023-12-23T14:04:37.3737+01:00",
        "task_status": 1
    },
    {
        "id": 5,
        "task_title": "Recycled Fresh Shoes",
        "task_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": 1
    },
    {
        "id": 6,
        "task_title": "Incredible Concrete Salad",
        "task_description": "The Football Is Good For Training And Recreational Purposes",
        "task_created": "2023-08-23T14:04:37.3737+01:00",
        "task_status": 0
    },
    {
        "id": 7,
        "task_title": "Gorgeous Granite Pants",
        "task_description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        "task_created": "2023-04-23T14:04:37.3737+01:00",
        "task_status": 0
    },
    {
        "id": 8,
        "task_title": "Licensed Wooden Chicken",
        "task_description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        "task_created": "2023-09-23T14:04:37.3737+01:00",
        "task_status": 0
    },
    {
        "id": 9,
        "task_title": "Refined Steel Shirt",
        "task_description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "task_created": "2023-11-23T14:04:37.3737+01:00",
        "task_status": 0
    },
    {
        "id": 10,
        "task_title": "Tasty Steel Chips",
        "task_description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "task_created": "2023-10-23T14:04:37.3737+01:00",
        "task_status": 1
    }
]


router.get("/tasks/", async (req, res) => {
    //console.log(tasks);
    res.status(200).send(tasks);
});

router.get("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const task = tasks.find((obj) => obj.id == id);
    if (task) res.status(200).send({ task: task });
    else res.status(404).send({ error: "No task found" });
});

router.post("/tasks/", (req, res) => {

    const { task_title, task_description } = req.body;

    if (task_title && task_description) {
        const ids = tasks.map(item => parseInt(item.id));

        const highestId = Math.max(...ids);
        let task_id = parseInt(highestId + 1);
        const newTask = {
            id: task_id,
            task_title: task_title,
            task_description: task_description,
            task_created: new Date().toISOString(),
            task_status: 0
        }
        //console.log(newTask);
        tasks.push(newTask);
        res.status(201).send(tasks);
    } else {
        res.status(401).send({ error: "Invalid tasks details" });
    }

});

router.put("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const task = tasks.find((obj) => obj.id == id);
    if (task) {

        const { task_title, task_description, task_status } = req.body;
        console.log(task);
        for (let task of tasks) {
            if (task.id == id) {
                if (task_title) task.task_title = task_title;
                if (task_description) task.task_description = task_description;
                if (task_status) task.task_status = task_status;
            }
        }
        res.status(201).send(tasks);
    } else {
        res.status(404).send({ error: "Task not found" });
    }

});

router.delete("/tasks/:id", async (req, res) => {
    const id = req.params.id;
    const task = tasks.findIndex((obj) => obj.id == id);
    //console.log(task);
    if (task != -1) {
        //console.log(task);
        tasks.splice(task, 1);
        res.status(200).send({ message: "Deleted task ID - " + id, tasks: tasks });
    }
    else {
        res.status(404).send({ error: "No task found" });
    }
});

router.get("/tasks/sort/:type/:order", async (req, res) => {
    // Takes the first parameter as task_title, created and status
    // Takes the second parameter as asc or desc
    const { type, order } = req.params;
    if (type === "task_title") {

        if (order === "asc") {
            const sortByTaskNameAsc = (a, b) => {
                if (a.task_title < b.task_title) return -1;
                if (a.task_title > b.task_title) return 1;
                return 0;
            };

            tasks.sort(sortByTaskNameAsc);
            res.status(200).send({ message: "Sort task_name by " + order, tasks: tasks });
        } else if (order === "desc") {
            const sortByTaskNameDesc = (a, b) => {
                if (a.task_title > b.task_title) return -1;
                if (a.task_title < b.task_title) return 1;
                return 0;
            };

            tasks.sort(sortByTaskNameDesc);
            res.status(200).send({ message: "Sort task_name by " + order, tasks: tasks });
        }


    } else if (type === "created") {
        if (order === "asc") {
            const sortByTaskCreatedAsc = (a, b) => {
                if (a.task_created < b.task_created) return -1;
                if (a.task_created > b.task_created) return 1;
                return 0;
            };

            tasks.sort(sortByTaskCreatedAsc);
            res.status(200).send({ message: "Sort task_name by " + order, tasks: tasks });
        } else if (order === "desc") {
            const sortByTaskCreatedDesc = (a, b) => {
                if (a.task_created > b.task_created) return -1;
                if (a.task_created < b.task_created) return 1;
                return 0;
            };

            tasks.sort(sortByTaskCreatedDesc);
            res.status(200).send({ message: "Sort task_created by " + order, tasks: tasks });
        }
    } else if (type === "status") {
        if (order === "asc") {
            const sortByTaskStatusAsc = (a, b) => {
                if (a.task_status < b.task_status) return -1;
                if (a.task_status > b.task_status) return 1;
                return 0;
            };

            tasks.sort(sortByTaskStatusAsc);
            res.status(200).send({ message: "Sort task_status by " + order, tasks: tasks });
        } else if (order === "desc") {
            const sortByTaskStatusDesc = (a, b) => {
                if (a.task_status > b.task_status) return -1;
                if (a.task_status < b.task_status) return 1;
                return 0;
            };

            tasks.sort(sortByTaskStatusDesc);
            res.status(200).send({ message: "Sort task_status by " + order, tasks: tasks });
        }
    } else {
        res.status(404).send({ error: "Params #1 task_title, created and status and Param #2 asc or desc" });
    }

});

module.exports = router;