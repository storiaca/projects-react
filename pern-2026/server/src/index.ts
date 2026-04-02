import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(cookieParser())