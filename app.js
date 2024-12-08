const express = require ('express');
const app = express();
const port = 3000;
const tasks = require("./controllers/taskController");

const Sequelize = require("sequelize");
const { USER, PASSWORD } = require('./db.config');
const sequelize = new Sequelize(
 'tasks',
 USER,
 PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);


app.post('/', (req, res) => {
    res.send(tasks.create)
  })