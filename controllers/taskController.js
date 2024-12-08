const { findAll } = require("../Repository/TaskRepository");
const asyncHandler = require("../Middleware/async");
/*
exports.create = (req, res) => {};

// Retrieve all Tasks from the database.
exports.findAll = asyncHandler(async (req, res, next) => {
  console.log(await findAll());
});

// Find a single Task with an id
exports.findOne = (req, res) => {};

// Update a Task by the id in the request
exports.update = (req, res) => {};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Task from the database.
exports.deleteAll = (req, res) => {};
*/

/*
sequelize.sync({ force: true }).then(async () => {
    console.log("Database synced!");

    // Create a new user
    const newTask = await Task.create({
    });
    console.log('Task created:', newTask.toJSON());

    // Read users
    const users = await Task.findAll();
    console.log('All users:', users);

    // Update a user
    const user = await Task.findByPk(1);
    user.lastName = 'Smith';
    await user.save();
    console.log('Task updated:', user.toJSON());

    // Delete a user
    await user.destroy();
    console.log('Task deleted');
}).catch(err => {
    console.error('Unable to sync database:', err);
});*/
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Task
    const task = {
        title: req.body.title,
        description: req.body.description,
        Priority,
        Category,
        DueDate,
        CompletionStatus
    };

    // Save Task in the database
    task.create(task)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Task."
            });
        });
};