const { Sequelize, DataTypes } = require("sequelize");
/*
module.exports = (Sequelize, Sequelize) => {
    const Task = Sequelize.define("task", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        dueDate: {
            type: DataTypes.DATE,
        },
        completionStatus: {
            type: DataTypes.DATE,

        },

    })
    return Task;
}*/
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('tasks', 'title', {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        });
        await queryInterface.addColumn('tasks', 'description', {
            type: DataTypes.STRING,

        });
        await queryInterface.addColumn('tasks', 'priority', {
            type: DataTypes.STRING,
            allowNull: false,

        });
        await queryInterface.addColumn('tasks', 'category', {
            type: DataTypes.STRING,
            allowNull: false,

        });
        await queryInterface.addColumn('tasks', 'dueDate', {
            type: DataTypes.DATE,

        });
        await queryInterface.addColumn('tasks', 'completionStatus', {
            type: DataTypes.DATE,

        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('tasks', 'title');
        await queryInterface.removeColumn('tasks', 'description');
        await queryInterface.removeColumn('tasks', 'priority');
        await queryInterface.removeColumn('tasks', 'category');
        await queryInterface.removeColumn('tasks', 'dueDate');
        await queryInterface.removeColumn('tasks', 'completionStatus');
    },
};