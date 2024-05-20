import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Interaction = sequelize.define(
    'Interaction',
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        customerId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Customers',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        dateTime: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW
        },
        type: {
            type: DataTypes.STRING
        },
        subject: {
            type: DataTypes.STRING
        },
        notes: {
            type: DataTypes.STRING
        },
        outcome: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'interactions'
    }
);

export default Interaction;
