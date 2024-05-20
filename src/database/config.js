import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from 'dotenv';

dotenv.config();

const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;

const development = {
    url: `postgres://${username}:${password}@ap-south-1.911fc373-ecb2-49f5-86da-7bbb28db445a.aws.ybdb.io:5433/postgres`,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            ca: fs
                .readFileSync(
                    path.join(__dirname, '../../certificates/root.crt')
                )
                .toString()
        }
    }
};
export default development;
