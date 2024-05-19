import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

const Log = sequelize.define(
    {
        timestamp: {
          type: DataTypes.DATE,
          allowNull: false
        },
        level: {
          type: DataTypes.STRING,
          allowNull: false
        },
        message: {
          type: DataTypes.STRING,
          allowNull: false
        },
        meta: {
          type: DataTypes.TEXT, // Adjust data type as necessary
          allowNull: true // Or false if required
        }
      },
      {
        tableName: 'applog', // Name of the table in the database
      }
);

export default Log;