import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Task = sequelize.define(
    'Task',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        assignedTo: {
            type: DataTypes.STRING,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        dueDate: {
            type: DataTypes.DATE
        },
        priority: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'tasks'
    }
);

export default Task;
