import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Role = sequelize.define(
    'Role',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'roles'
    }
);

export default Role;
