const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const tasks = require("./controllers/taskController");

const Sequelize = require("sequelize");
const { USER, PASSWORD } = require('./config/db.config');
const sequelize = new Sequelize(
    'tasks',
    USER,
    PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Retrieve all Tasks
app.get('/', (req, res) => {
    res.send(tasks.findAll)
})

app.post('/', (req, res) => {
    res.send(tasks.create)
})

app.put('/', (req, res) => {
    res.send(tasks.update)
})



// Retrieve a single Task with id
router.get("/:id", tasks.findOne);

// Update a Task with id
router.put("/:id", tasks.update);

// Delete a Task with id
router.delete("/:id", tasks.delete);

// Delete all Tasks
router.delete("/", tasks.deleteAll);
