import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './src/database/db.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json({ extended: true }));
app.use(cors());

app.listen(3000, async () => {
    console.log(`Server is running on port ${3000}`);
    await sequelize.sync();
    console.log('Db is connected');
});
