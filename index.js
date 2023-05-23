import express from "express";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize";
import path from "path";
import { fileURLToPath } from "url";

import routerTest from './routes/index.js';

// dirname from Common Js to ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

dotenv.config();

const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, '/public/style/')));

app.use(routerTest);

app.listen(process.env.APP_PORT, ()=> {
    console.log(`Server running on port`, process.env.APP_PORT);
})