import { DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

const Opportunity = sequelize.define(
    'Opportunity',
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
        productService: {
            type: DataTypes.STRING
        },
        estimatedValue: {
            type: DataTypes.STRING
        },
        stage: {
            type: DataTypes.STRING
        },
        expectedCloseDate: {
            type: DataTypes.DATE
        },
        probabilityOfClosure: {
            type: DataTypes.STRING
        },
        notes: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'opportunities'
    }
);

export default Opportunity;
