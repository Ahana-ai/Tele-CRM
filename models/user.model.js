import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Roles',
                key: 'id'
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        tableName: 'users'
    }
);

export default User;
