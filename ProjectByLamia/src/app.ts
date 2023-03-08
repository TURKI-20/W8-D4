import express , {Application , Request , Response} from 'express';
import { connectDB } from "./config/db";
import  User  from './routes/user.route';
// import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
const app: Application = express();
const port = 3008;


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
app.use(express.json())
dotenv.config();
connectDB();

app.use("/", User);

app.listen(port , ()=> console.log(`express started on port ${port}`));