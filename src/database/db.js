import { Sequelize } from 'sequelize';
import development from './config.js';

const sequelize = new Sequelize(development.url, {
    dialect: development.dialect,
    dialectOptions: development.dialectOptions
});

export default sequelize;
