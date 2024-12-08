const { Sequelize, DataTypes } = require("sequelize");

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
}
