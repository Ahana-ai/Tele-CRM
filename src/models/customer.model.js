import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

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
        }
    },
    {
        tableName: 'customers'
    }
);

export default Customer;
