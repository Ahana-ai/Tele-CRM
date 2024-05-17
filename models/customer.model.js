import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Customer = sequelize.define(
    'Customer',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING
        },
        company: {
            type: DataTypes.STRING
        },
        industry: {
            type: DataTypes.STRING
        },
        lastContactDate: {
            type: DataTypes.DATE
        },
        notes: {
            type: DataTypes.STRING
        },
        assistant: {
            type: DataTypes.STRING,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    },
    {
        tableName: 'customers'
    }
);

export default Customer;
